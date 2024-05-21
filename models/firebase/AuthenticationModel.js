import { firebase } from "../../utils/firebase/config.js";
export class Authentication {
  constructor(auth) {
    this.auth = auth;
  }
  async createUser(userData) {
    try {
      const userRecord = await this.auth.createUser(userData);
      return [true, userRecord.uid];
      // return userRecord.uid;
    } catch (error) {
      return [false, error.message];
    }
  }

  verificationEmail(email) {
    return this.auth.generateEmailVerificationLink(email);
  }

  async loginUser(email, password) {
    try {
      const userRecord = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      return [true, userRecord.user.uid];
    } catch (error) {
      return [false, error.message];
    }
  }

  async updateUser(uid, updateUserData) {
    try {
      const userRecord = await this.auth.updateUser(uid, updateUserData);
      return [true, userRecord.toJSON()];
    } catch (error) {
      return [false, error.message];
    }
  }

  async getUser(uid) {
    try {
      const user = await this.auth.getUser(uid);
      return [true, user];
    } catch (error) {
      return [false, error.message];
    }
  }

  async deleteUser(uid) {
    try {
      await this.auth.deleteUser(uid);
      return [true, uid];
    } catch (error) {
      return [false, error.message];
    }
  }

  async createPhoneVerification(phoneNumber) {
    const request = await this.auth.createSessionCookie(phoneNumber, {
      expiresIn: 3600,
    });
    return request;
  }

  async verityPhoneVerification(verificationId, otp) {
    const userCreds = await this.auth.verifySessionCookie(verificationId, otp);
    return userCreds;
  }

  async resetPassword(email) {
    const request = await this.auth.sendPasswordResetEmail(email);
    return request;
  }

  emailVerification(url) {
    return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Verification - CivicCircle</title>
          <style>
              /* Add your custom CSS styles here */
          </style>
      </head>
      <body>
          <div style="background-color: #f3f4f6; padding: 20px;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; padding: 40px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                  <h1 style="color: #333333; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Verify Your Email Address</h1>
                  <p style="color: #666666; font-size: 16px; margin-bottom: 30px;">Thank you for signing up for CivicCircle! To complete your registration, please verify your email address by clicking the button below:</p>
                  <a href="${url}" style="display: inline-block; background-color: #007bff; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 4px; font-size: 16px; font-weight: bold;">Verify Email Address</a>
                  <p style="color: #666666; font-size: 14px; margin-top: 30px;">If you did not sign up for an account on CivicCircle, you can safely ignore this email.</p>
              </div>
          </div>
      </body>
      </html>`;
  }
}