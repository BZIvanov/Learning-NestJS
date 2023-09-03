# About this Demo

Here we will see how to work with google authentication and sessions.

## Google

1. Go to google cloud console.
2. Create new project
3. Go to APIs and Services
4. Select OAuth consent screen. Select external user and click Create.
   - Give your app a name, select support email, select developer mail. Click Save and continue
   - For scopes select email and profile. Click Save and continue
   - For test user add your email. Click Save and continue
5. Select Credentials
   - Click Create credentials and select OAuth client id
   - Select Web application
   - Give your app a name
   - For Authorized redirect URIs provide value `http://localhost:3000/auth/google/redirect`
   - Click Save
