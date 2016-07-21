# Investigation [API Odnoklassniki](http://new.apiok.ru/)

## 1. Create an account in Odnoklassniki. 
 - Go to [Odnoklassniki.ru](https://ok.ru/).
 - Click on the "Registration" link above the login form.
 - Choose your country in a drop-down box. Insert your phone number for verification that you are not a robot.
 - Click on "Next" button under the registration form.
 - Type  confirmation code in the "Code from the SMS" field and click "Next" button.
 - Enter a strong password in "Create password" field and press "Next".
 - In the opened registration form fill out the required fields: name, surname, date of birth, select a gender and click on "Save".

## 2. Register as developer.

**Indicated an e-mail in your profile.**
  - Click on "Settings".
  - Click on "change e-mail" link.
  - Fill out the required fields: Password and new e-mail, click "Save" button to submit the changes.
  - You will get an email with a link that you will need to click in order to activate your odnoklassniki account.

**Go to registration [form for access.](http://www.ok.ru/devaccess)**
Read and accept the Terms and Conditions of the Agreement and press "Recieve the developer rights".

## 3. Authorization
Odnoklassniki API uses the OAuth 2.0 protocol for authentication and authorization. To use OAuth you need to have an account on Odnoklassniki and indicated an email 
in your profie, register as developer [http://ok.ru/devaccess.](http://ok.ru/devaccess) and create an app:
- external – for standalone and browser-based javascript apps;
- android – for native mobile Android-based apps;
- ios – for native mobile iOS-based apps.

### Create new app.
- Go to your account.
- Click on a "Game" link in a upper menu.
- In a left menu click "My uploads".
- Click on "Add app" link.
- In appear window enter the required information.
- Click "Save".

During app creation you will need write a redirect_uri to be used during OAuth authorization:

- For external apps you can writee any valid URI.
E.g.: http://localhost/auth
- For Android-based apps with Android SDK: okauth://ok<APP_ID>.
E.g.: okauth://ok123456
- For iOS-based apps: ok<APP_ID>://authorize.
E.g.: ok123456://authorize

After that you will see the message "A code has been sent to your email, you will need to enter it while changing app settings". Follow your e-mail to check message 
about successful registration your app and get more information: 
 
 ```json
 Application id: "{clien_id}"; 
 Publick application code: "{publick_code}"; 
 Secret application code: "{secter_code}";
 ```

### Create link for authorization:

**Init parameters**
1. client_id - Application ID
2. response_type - only "code" response type supported at this moment
3. redirect_uri - URI to redirect user after authentication with additional parameter
4. scope- permissions scope, separated by ";":
    - VALUABLE_ACCESS - access to all API methods, except users.getLoggedInUser and users.getCurrentUser. To have effect permission must also be set by Odnoklassniki 
side as well. To request permission send an email with id and shortname of your application to the address api-support@odnoklassniki.ru
    - SET_STATUS
    - PHOTO_CONTENT
    - MESSAGING (issued in special cases)
5. layout - "m" for mobile view, if needed. For web view please skip this parameter
 
 ```html
 https://connect.ok.ru/oauth/authorize?client_id={clientId}&scope={scope}&response_type={{response_type}}&redirect_uri={redirectUri}&layout={layout}&state={state}
 ```

If the user presses Allow, your Application is authorized. The OAuth Dialog will redirect (via HTTP 302) the user's browser to the URL you passed in the redirect_uri
parameter with an authorization code:
 
```
{return_url}&code={access code}
```
In order to authenticate your Application and get access token, you must pass the authorization code to the API token endpoint at:
```
 http://api.odnoklassniki.ru/oauth/token.do.
```
 
**Success response JSON**
```
{
  access_token: "{access_token}",
  token_type: "session",
  refresh_token: "{refresh_token}",
  expires_in: "{expires_in}"
}
```

> Authorization code is valid 2 minutes only

With a valid access token you can invoke the API by appending the access_token parameter to requests:
 
```
http://api.ok.ru/fb.do?access_token=kjdhfldjfhgldsjhfglkdjfg9ds8fg0sdf8gsd8fg&method=......
```
 
> Call API methods using access_token instead of session_key parameter
Calculate every request signature parameter sig using a little bit different than usual:
`sig = md5( request_params_composed_string+ md5(access_token + application_secret_key)  ).`
Don't include access_token into request_params_composed_string

**Using refresh token.**
Access token has limited lifetime, about 30 minutes. To access API service after access token expired You can get another access token with `refresh token`.
Refresh token invalidates, when user changes password.
Currently refresh token expires after 30 days, which will be probably extended to several months in the future.
Create a POST request to API endpoint.

```
http://api.ok.ru/oauth/token.do
```

###Access token with long lifetime
Long access token is issued when user has granted permission LONG_ACCESS_TOKEN to your API application. Long token is returned in same way as ordinary token 
in parameter "access_token", but it's lifetime is extended to 1 month.

The prolongation of access token lifetime occurs in following cases:
1) Automatically when you call any API method if you are using long access token for this API call. The lifetime is set to 30 days beginning from moment of 
last automatic prolongation. The prolongation occurs at the moment of API call but not more often than once a day for sake of optimization. So, if user uses
your API application on regular base the token will be prolonged automatically and no additional action is necessary.

2) Long access token can be prolonged explicitly by using API method auth.touchSession. The lifetime is set to 30 days beginning from moment of method call.

The access token is valid until user revokes authorization of API application by using page https://www.ok.ru/settings/oauth or changes password on the OK.ru.

**Parameters**
1. refresh_token - refresh token received before
2. grant_type = refresh_token
3. client_id - Application ID
4. client_secret - application secret key

**Common problems and solutions:**
- i receive error=invalid_client 
- wrong application type. Your application must be external
- on valuable_access request i receive PERMISSION DENIED: User must grant an access to permission 'VALUABLE_ACCESS'.
- this permission set by Odnoklassniki. You should write e-mail with your application id and shortname to api-support@odnoklassniki.ru

### Ok.ru API with node

The npm module allows you to simplify making API requests into odnoklassniki REST API.

**Example usage**
```
ok = require("ok.ru")

Basic configuration params

requestOptions = {
  applicationSecretKey: '{secretKey}',
  applicationKey: '{applicationKey}',
  applicationId: '{applicationId}',
}

ok.setOptions(requestOptions)
// You can specify accessToken in requestOptions or separately
// For example: if you have many users and you whant to iterate through them
ok.setAccessToken('{access_token}')

// All data passed in Object
ok.post { method: 'group.getUserGroupsV2' }, (err, data) ->
  
// Some actions with data
// You can also specify types of requests
ok.post, ok.get

// Or pass in, as argument
new ok.api 'get', { method: 'users.isAppUser' }, (err, data) ->
// some actions with data

// It properly handle errors
ok.setAccessToken('invalid_token') # Invalid token

new ok.api 'get', { method: 'users.isAppUser' }, (err, data, response) ->
  // some actions with data
  alert "Alarm! Error! #{err}" if err?
  // It can transport all response and headers
  console.log response
Refresh user token method

ok.refresh '{refresh_token}', (err, data) ->
  data.access_token // new token
```
 
### JavaScript SDK

Github repository [ok-js-sdk](https://github.com/odnoklassniki/ok-js-sdk).

[Samples with SDK ](https://github.com/odnoklassniki/ok-js-sdk/tree/master/samples).

For using SDK you need:
- copy [oksdk.js](https://github.com/odnoklassniki/ok-js-sdk/blob/master/oksdk.js)
- add next script: `<script type="text/javascript" src="oksdk.js"></script>` inside the head

**Initialization:**
```
var config = {
    app_id: "", //insert app id
    app_key: '' //insert APP PUBLIC KEY
};

OKSDK.init(config, function () {
    //on success
}, function (error) {
    //on error
});
```
**REST-methods**
 ```
OKSDK.REST.call("METHOD_NAME", { fields: "FIELDS"}, function (status, data, error) {
	//callback
});
```

# 4 Odnoklassniki REST API

## General information
All API methods are available through GET and POST requests.
Every method is available under 2 urls :

1. `[Server Address]fb.do?method=[method_name] - for example http:// http://127.0.0.1:8088/fb.do?method=friends.get`

2. `[Server Address]api/[method_group]/[method_name] - for example http://127.0.0.1:8088/api/friends/get`

Server Address is passed to the Web applications in "api_server" parameter.
method can't be passed as an attachment in photo upload methods, but must be passed as query parameter only.
While it is recommended to use "api_server" parameter, you can use the default address for non session requests: [http://api.odnoklassniki.ru/](http://api.odnoklassniki.ru/)

## Data protection
User, group, album and other ID's are returned as String (this can be changed by request). User IDs for different applications are not the same by default.

## Response format
Response can be obtained in one of the two following formats: XML or JSON, as was mentioned above. If not specified, HTTP Accept header will be used to determine the 
format (application/xml or application/json)

There is a certain subtlety that one should keep in mind when calling methods that return lists of data. If the list returned by the method is empty then:

* XML response format: the tag will not contain any elements within itself.
* JSON response format: will return null.

`If server can't handle query, you will receive message with error. See [Error handling.](https://apiok.ru/wiki/display/api/Error+handling)

## Support
Application can specify the support URL to report issues directly from the portal help screen.
User will be redirected to this URL with the following parameters:

|  Name |  Type | Description  | 
|---|---|---|
| application_key  | String  | The application key associated with the application.  |
|  uid | String  | ID of user, reporting the problem | 
| name  |  String | Full name of user, reporting the problem | 
| first_name  | String | First name of user, reporting the problem  | 
| last_name  |  String |Last name of user, reporting the problem   | 

**Example getting information using getCurrentUser method:**

```
{
  "uid":"{uid}",
  "birthday":"{0000-00-00}",
  "age":"{age}",
  "first_name":"{Name}",
  "last_name":"{Surname}",
  "name":"{Name Surname}",
  "gender":"{male}",
  "has_email":"{true}",
  "pic_1":"{http://i113.odnoklassniki.ru/getImage?photoId=93412337&photoType=4}",
  "pic_2":"{http://i342.odnoklassniki.ru/getImage?photoId=93412337&photoType=2}"
}
```

To get more information about user you need to grant an access to permission 'VALUABLE_ACCESS'.

* users.getInfo - Returns a wide array of user-specific information for each user identifier passed.
* events.get - Returns number of events need to be displayed for the logged user : messages, notifications, feeds, 
* friends.get - Returns users' IDs of the current user's friends.
* group.getUserGroupsV2 - Retrieves list of the user's groups.
* photos.getPhotos - Provides a list of photos of the user, his/her friend or group.