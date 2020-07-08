import dotenv from "dotenv";

dotenv.config();

export const awsPhotoUrl = process.env.REACT_APP_AWS_PHOTO_URL;
export const google = {
  oAuthId: process.env.REACT_APP_GOOGLE_OAUTH_ID
};

export const apiServer = {
  development: process.env.REACT_APP_API_DEVELOPMENT,
  production: process.env.REACT_APP_API_PRODUCTION,
  staged: process.env.REACT_APP_API_STAGED
};
