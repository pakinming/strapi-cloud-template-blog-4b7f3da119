// module.exports = () => ({
//     //configure plugins google provider image storage
    
//  });
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      providerOptions: {
        bucketName: env('GCS_BUCKET_NAME'), // Your bucket name
        publicFiles: env('GCS_PUBLIC_FILES', false), // Set to true if you want public URLs
        uniform: env('GCS_UNIFORM_ACL', false), // Set to true if your bucket uses uniform bucket-level access
        basePath: env('GCS_BASE_PATH', ''), // Optional sub-folder
        serviceAccount: JSON.parse(env('GCS_SERVICE_ACCOUNT_KEY')), // Your service account JSON key
      },
    },
  },
});
