import dotenv from "dotenv";

dotenv.config();

export const awsPhotoUrl = process.env.REACT_APP_AWS_PHOTO_URL;
export const google = {
  oAuthId: process.env.REACT_APP_GOOGLE_OAUTH_ID
};
