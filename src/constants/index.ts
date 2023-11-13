import { config } from 'dotenv';

config();

// Twilio configuration
export const TWILIO_ACCOUNT_SID =
  process.env.TWILIO_ACCOUNT_SID || 'twilio-account-sid';
export const TWILIO_AUTH_TOKEN =
  process.env.TWILIO_AUTH_toKEN || 'twilio-auth-token';
export const TWILIO_TEST_ACCOUNT_SID =
  process.env.TWILIO_TEST_ACCOUNT_SID || 'twilio-test-account-sid';
export const TWILIO_TEST_AUTH_TOKEN =
  process.env.TWILIO_TEST_AUTH_TOKEN || 'twilio-test-auth-token';
export const TWILIO_PHONE_NUMBER =
  process.env.TWILIO_PHONE_NUMBER || '+23411111111';

// general app configs
export const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';
export const PORT = process.env.PORT || 3000;
export const APP_NAME = 'Bulk SMS Sender API';

export const MESSAGES = {
  ACCESS_TOKEN_ERROR_RESPONSE: 'Access token is invalid. Please log in again',
  ALREADY_EXISTS: 'This resource already exists',
  ASSIGNED: 'Resource assignment completed successfully',
  AUTHENTICATION_FAILURE: 'Authentication failed. Please log in again',
  AUTH_DEFAULT: 'Authentication is required for this action',
  AUTH_FAILURE: 'Authentication failed. Please check your credentials',
  BAD_PARAMETERS: 'Oops! Invalid parameters were provided',
  CREATED: 'Resource created successfully',
  DEFAULT: "We've received your request and you've received ours",
  DELETED: 'Resource deleted successfully',
  ERROR: 'Oops! An error occurred while processing the resource',
  FAILURE_MSG_RESPONSE: 'Oops! The operation failed to complete',
  FETCHED: 'Resource retrieved successfully',
  FORBIDDEN: "Sorry, you don't have permission to access this resource",
  FOUND: 'Resource found successfully',
  INTERNAL_ERROR: 'An internal error occurred. Our team is addressing it!',
  INVALID_UNIQUE_ID: 'Invalid unique identifier provided',
  LOGGED_IN: "You've been successfully logged in",
  LOGIN_FAILURE: 'Login failed. Please check your email and password',
  LOGIN_FIRST: 'Oops! Please log in first to proceed',
  LOGOUT: "You've been successfully logged out. Have a wonderful day!",
  MAIL_SENT: 'Email sent successfully. Please check your inbox!',
  NOT_AUTHENTICATED: 'Oops! You need to be authenticated for this action',
  NOT_FOUND: 'Sorry, the requested resource was not found',
  ROUTE_NOT_FOUND: "Sorry, the page you're looking for doesn't exist.",
  SUCCESSFUL: 'Successful',
  SUCCESS_MSG_RESPONSE: 'Success! The operation was completed successfully',
  TOKEN_REFRESH_RESPONSE:
    'Success! The access token was refreshed successfully',
  UNKNOWN_ERROR: 'Oops! An unknown error occurred',
  UPDATED: 'Resource updated successfully',
  USER_ALREADY_EXISTS: 'The user already exists',
  USER_NOT_FOUND: 'User not found',
  USER_UNAUTHORIZED: 'Sorry, you are not authorized to perform this operation',
  WELCOME_V1: 'Welcome to Version 1',
};

export const LINKS = {
  EMAIL: 'mailto:app@mail.online',
  GOOGLE_MEET: 'https://meet.google.com',
  PHONE_CALL: 'tel:+2349999999999',
  SMS: 'sms:+2349999999999',
  WHATSAPP_CALL: 'https://wa.me/2349999999999',
  WHATSAPP_CHAT: 'https://wa.me/2349999999999',
  ZOOM: 'https://zoom.us/j/9999999999',
};
