const config = {
    apiBaseUrl: process.env.REACT_APP_API_BASE_URL || "http://localhost:5000",
    s3BucketName: process.env.REACT_APP_S3_BUCKET_NAME,
    defaultImagePath: "/assets/images/default.jpg",
    appName: "Jules Portfolio"
  };
  
  export default config;
  