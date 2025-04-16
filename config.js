'use strict';
/* eslint no-process-env: 0 */

const env = process.env.NODE_ENV || 'production';

module.exports = {
  env: env,
  dateLocales: 'en-GB',
  dateFormat: {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  },
  govukNotify: {
    notifyApiKey: process.env.NOTIFY_KEY,
    caseworkerEmail: process.env.CASEWORKER_EMAIL,
    userConfirmationTemplateId: process.env.USER_CONFIRMATION_TEMPLATE_ID,
    businessConfirmationTemplateId: process.env.BUSINESS_CONFIRMATION_TEMPLATE_ID
  },
  redis: {
    port: process.env.REDIS_PORT || '6379',
    host: process.env.REDIS_HOST || '127.0.0.1'
  },
  sessionDefaults: {
    fields: ['csrf-secret'],
    saveExemptions: ['/application-type', '/licensee-type', '/information-you-have-given-us', '/application-submitted']
  },
  saveService: {
    protocol: process.env.DATASERVICE_USE_HTTPS === 'false' ? 'http' : 'https',
    port: process.env.DATASERVICE_SERVICE_PORT_HTTPS || '10443',
    host: process.env.DATASERVICE_SERVICE_HOST || '127.0.0.1'
  },
  upload: {
    maxFileSizeInBytes: 25 * 1024 * 1024, // 25MiB in bytes
    hostname: process.env.FILE_VAULT_URL,
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
      }
    }
  },
  aws: {
    bucket: process.env.AWS_BUCKET,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    signatureVersion: process.env.AWS_SIGNATURE_VERSION,
    kmsKeyId: process.env.AWS_KMS_KEY_ID,
    region: process.env.AWS_REGION
  },
  keycloak: {
    tokenUrl: process.env.KEYCLOAK_TOKEN_URL,
    fileVault: {
      username: process.env.FILE_VAULT_USERNAME,
      password: process.env.FILE_VAULT_PASSWORD,
      clientId: process.env.FILE_VAULT_CLIENT_ID,
      secret: process.env.FILE_VAULT_CLIENT_SECRET
    }
  },
  aggregateLimits: {
    precursorChemicals: {
      substanceLimit: 100
    },
    controlledDrugs: {
      tradingReasonsLimit: 5
    }
  }
};
