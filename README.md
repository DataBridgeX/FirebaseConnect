# FirebaseConnect API Documentation

Welcome to the comprehensive documentation for FirebaseConnect, a robust API designed to streamline integration with Firebase services. This documentation aims to provide an in-depth understanding of FirebaseConnect's endpoints, methods, and functionalities for seamless interaction with Firebase Authentication, Cloud Firestore, Firebase Realtime Database, and Firebase Cloud Storage.
[Hosted API](https://fir-connect-ea9c9.uc.r.appspot.com)
## Authentication

FirebaseConnect simplifies user authentication with Firebase Authentication through a comprehensive set of endpoints and methods.

### Endpoints

- `/auth/signup`: Creates a new user account.
- `/auth/login`: Logs in with an existing user account.
- `/auth/logout`: Logs out the currently authenticated user.
- `/auth/reset-password`: Resets the password for a user account.
- `/auth/verify-email`: Sends a verification email to the user's email address.

### Methods

- `signup(userData)`: Creates a new user account with the provided user data.
- `login(email, password)`: Logs in with the specified email and password.
- `logout()`: Logs out the currently authenticated user.
- `resetPassword(email)`: Resets the password for the specified email address.
- `verifyEmail()`: Sends a verification email to the user's email address.

## Firestore

FirebaseConnect offers seamless integration with Cloud Firestore, empowering developers to manage data efficiently with intuitive endpoints and methods.

### Endpoints

- `/firestore/create`: Creates a new document in the Firestore collection.
- `/firestore/read`: Reads a document from the Firestore collection.
- `/firestore/update`: Updates a document in the Firestore collection.
- `/firestore/delete`: Deletes a document from the Firestore collection.

### Methods

- `create(data)`: Creates a new document in the Firestore collection with the provided data.
- `read()`: Reads a document from the Firestore collection.
- `update(data)`: Updates the document in the Firestore collection with the provided data.
- `delete()`: Deletes the document from the Firestore collection.

## Realtime Database

FirebaseConnect simplifies real-time data synchronization with Firebase Realtime Database through intuitive endpoints and methods.

### Endpoints

- `/realtime/create`: Creates a new item in the Realtime Database.
- `/realtime/read`: Reads items from the Realtime Database.
- `/realtime/update`: Updates an item in the Realtime Database.
- `/realtime/delete`: Deletes an item from the Realtime Database.

### Methods

- `create(data)`: Creates a new item in the Realtime Database with the provided data.
- `read()`: Reads items from the Realtime Database.
- `update(id, newData)`: Updates the specified item in the Realtime Database with the new data.
- `delete(id)`: Deletes the specified item from the Realtime Database.

## Storage

FirebaseConnect simplifies file storage with Firebase Cloud Storage through intuitive endpoints and methods.

### Endpoints

- `/storage/upload`: Uploads a file to Firebase Storage.
- `/storage/download`: Downloads a file from Firebase Storage.
- `/storage/delete`: Deletes a file from Firebase Storage.

### Methods

- `uploadFile(file, path)`: Uploads the specified file to Firebase Storage at the given path.
- `downloadFile(path)`: Downloads the file from Firebase Storage at the specified path.
- `deleteFile(path)`: Deletes the file from Firebase Storage at the specified path.

## Contribution Guidelines

Contributions to the FirebaseConnect API documentation are welcome! If you have any improvements or additions, please feel free to submit a pull request or open an issue on GitHub. Your feedback is valuable in improving the documentation for the FirebaseConnect API.

## Contact Us

We value your feedback and contributions to FirebaseConnect API. If you have any questions, suggestions, or issues, please don't hesitate to contact us:

Email: go2ranuga@gmail.com
GitHub Repository: [FirebaseConnect on GitHub](https://github.com/DataBridgeX/FirebaseConnect)

## License

FirebaseConnect is an open-source project distributed under the MIT License. Feel free to use, modify, and distribute it in accordance with the license terms. Your contributions are highly appreciated and welcomed to improve FirebaseConnect for the broader developer community.
