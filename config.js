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
  timeFormat: {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  },
  govukNotify: {
    notifyApiKey: process.env.NOTIFY_KEY,
    emailTemplates: {
      licenceApplicationUserConfirmation: process.env.EMAIL_TEMPLATE_ID_LICENCE_APPLICATION_USER_CONFIRMATION,
      registrationUserConfirmation: process.env.EMAIL_TEMPLATE_ID_REGISTRATION_USER_CONFIRMATION,
      registrationPassword: process.env.EMAIL_TEMPLATE_ID_REGISTRATION_PASSWORD
    },
    replyToId: process.env.EMAIL_REPLY_TO_ID
  },
  redis: {
    port: process.env.REDIS_PORT || '6379',
    host: process.env.REDIS_HOST || '127.0.0.1'
  },
  sessionDefaults: {
    fields: ['csrf-secret', 'username'],
    saveExemptions: [
      '/application-type',
      '/licensee-type',
      '/information-you-have-given-us',
      '/application-submitted',
      '/save-and-exit',
      '/session-timeout'
    ]
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
    logoutUrl: process.env.KEYCLOAK_LOGOUT_URL,
    keycloakPublicKey: process.env.KEYCLOAK_PUBLIC_KEY,
    fileVault: {
      username: process.env.FILE_VAULT_USERNAME,
      password: process.env.FILE_VAULT_PASSWORD,
      clientId: process.env.FILE_VAULT_CLIENT_ID,
      secret: process.env.FILE_VAULT_CLIENT_SECRET
    },
    userAuthClient: {
      clientId: process.env.USER_AUTH_CLIENT_ID,
      secret: process.env.USER_AUTH_CLIENT_SECRET,
      allowedUserRole: process.env.USER_AUTH_ALLOWED_ROLE
    },
    adminClient: {
      clientId: process.env.ADMIN_CLIENT_ID,
      secret: process.env.ADMIN_CLIENT_SECRET
    }
  },
  icasework: {
    apiKey: process.env.ICASEWORK_API_KEY,
    apiSecret: process.env.ICASEWORK_API_SECRET,
    url: process.env.ICASEWORK_URL,
    db: process.env.ICASEWORK_DB
  },
  aggregateLimits: {
    precursorChemicals: {
      substanceLimit: 100
    },
    controlledDrugs: {
      tradingReasonsLimit: 5
    },
    industrialHemp: {
      businessAdjacentLimit: 100
    }
  },
  wizardSessionKeyPrefix: 'hof-wizard',
  feedback: {
    common: process.env.FEEDBACK_URL_COMMON,
    controlledDrugs: process.env.FEEDBACK_URL_CONTROLLED_DRUG,
    industrialHemp: process.env.FEEDBACK_URL_INDUSTRIAL_HEMP,
    precursorChemicals: process.env.FEEDBACK_URL_PRECURSOR_CHEMICALS,
    registration: process.env.FEEDBACK_URL_REGISTRATION
  }
};
