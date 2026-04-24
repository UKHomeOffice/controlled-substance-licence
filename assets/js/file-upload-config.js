/**
 * Shared file upload configuration used by both frontend and backend.
 */

module.exports = {
  maxFileSizeInBytes: 25 * 1024 * 1024, // 25MiB in bytes
  allowedMimeTypes: [
    'image/jpeg',
    'image/png',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ],
  documentCategories: {
    'company-registration-certificate': {
      limit: 20,
      limitValidationError: 'companyRegistrationCertificateLimit'
    },
    'certificate-of-good-conduct': {
      limit: 20,
      limitValidationError: 'certificateOfGoodConductLimit'
    },
    'user-activity-template': {
      limit: 1,
      limitValidationError: 'userActivityTemplateLimit',
      allowedMimeTypes: [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      ]
    },
    'aerial-photos-upload': {
      limit: 20,
      limitValidationError: 'aerialPhotosUploadLimit',
      allowedMimeTypes: [
        'image/jpeg',
        'image/png',
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ]
    },
    'record-keeping-document': {
      limit: 20,
      limitValidationError: 'recordKeepingDocumentLimit'
    },
    'perimeter-upload': {
      limit: 20,
      limitValidationError: 'perimeterUploadLimit',
      allowedMimeTypes: [
        'image/jpeg',
        'image/png',
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ]
    }
  }
};
