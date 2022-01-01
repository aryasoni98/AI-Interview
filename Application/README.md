## Frontend

### Folder Structure

All the JS files are inside the src folder.

```
|_ src
  |_components
  |_css
  |_firebase
  |_hoc
  |_layout
  |_pages
  |_app.jsx
  |_index.jsx
```

Note: Pages folder contains the code for all web pages.

## How to run React App ?

1. Navigate to Application folder

```bash
  cd Application
```

2. Install required packages

```bash
  npm install
```

3. Set up your own firebase account to get the credentials for google sign-in.
   If you already have them, skip to step 9.

4. Go to firebase console, click on create a 'Add project'. Select a project
   name and click Continue.

5. Navigate to Authentication from the sidebar and go to 'Sign-in method tab'

6. Click on Google sign in and enable it (for project support email id, enter
   your own email).

7. Make sure that localhost is present in 'Authorised domains' section in order
   to allow the to run locally on your machine.

8. Go to the project settings and add firebase to your webapp, select a name and
   you'll be able to see all your firebase credentials there.

9. Create a new .env file and copy all the contents from .env_sample to the
   newly created .env file.

10. Add all your firebase credentials in the .env file.

11. Start the application

```bash
npm start
```
