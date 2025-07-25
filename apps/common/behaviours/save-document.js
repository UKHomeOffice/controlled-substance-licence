'use strict';

const config = require('../../../config');
const FileUpload = require('../../../utils/file-upload');

const { sanitiseFilename } = require('../../../utils');

module.exports = (documentCategory, fieldName) => superclass => class extends superclass {
  process(req) {
    if (req.files && req.files[fieldName]) {
      req.form.values[fieldName] = req.files[fieldName].name;
      req.log('info', `Processing field ${fieldName} with value: ${sanitiseFilename(req.files[fieldName].name)}`);
    }
    super.process.apply(this, arguments);
  }

  locals(req, res) {
    const locals = super.locals(req, res);
    locals.documents = req.sessionModel.get(documentCategory) || [];

    return locals;
  }

  validateField(key, req) {
    const fileToBeValidated = req.files[fieldName];
    const documentsByCategory = req.sessionModel.get(documentCategory) || [];
    const validationErrorFunc = (type, args) => new this.ValidationError(key, { type: type, arguments: [args] });

    // To check required type, when trying to do continue without upload
    if ((req.body.continueWithoutUpload ||
         req.body['save-and-exit']) &&
          documentsByCategory.length === 0) {
      return validationErrorFunc('required');
    } else if (fileToBeValidated) {
      const uploadSize = fileToBeValidated.size;
      const mimetype = fileToBeValidated.mimetype;

      const documentCategoryConfig = config.upload.documentCategories[documentCategory];
      const allowedMimeTypes = documentCategoryConfig.allowedMimeTypes || config.upload.allowedMimeTypes;

      const uploadSizeTooBig = uploadSize > config.upload.maxFileSizeInBytes;
      const uploadSizeBeyondServerLimits = fileToBeValidated.truncated;

      const invalidSize = uploadSizeTooBig || uploadSizeBeyondServerLimits;
      const invalidMimetype = !allowedMimeTypes.includes(mimetype);

      const numberOfDocsUploaded = documentsByCategory.length;

      const isDuplicateFile = documentsByCategory.some(file => file.name === req.files[fieldName].name);

      if (invalidSize) {
        return validationErrorFunc('maxFileSize');
      } else if (invalidMimetype) {
        return validationErrorFunc('fileType');
      } else if (numberOfDocsUploaded >= documentCategoryConfig.limit) {
        return validationErrorFunc(documentCategoryConfig.limitValidationError, [documentCategoryConfig.limit]);
      } else if (isDuplicateFile) {
        return validationErrorFunc('isDuplicateFileName', [req.files[fieldName].name]);
      }
    }
    return super.validateField(key, req);
  }

  async saveValues(req, res, next) {
    const documentsByCategory = req.sessionModel.get(documentCategory) || [];

    if (req.files[fieldName]) {
      req.log('info',
        `Saving document: ${sanitiseFilename(req.files[fieldName].name)} in ${documentCategory} category`
      );
      const document = {
        name: req.files[fieldName].name,
        data: req.files[fieldName].data,
        mimetype: req.files[fieldName].mimetype
      };
      const upload = new FileUpload(document);

      try {
        await upload.save();
        req.sessionModel.set(documentCategory, [...documentsByCategory, upload.toJSON()]);
        return res.redirect(`${req.baseUrl}${req.path}`);
      } catch (error) {
        return next(new Error(`Failed to save document: ${error}`));
      }
    }
    return super.saveValues.apply(this, arguments);
  }
};
