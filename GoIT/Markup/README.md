# 1. Create an account in Odnoklassniki. 
 - Go to [Odnoklassniki.ru](https://ok.ru/).
 - Click on the "Registration" link above the login form.
 - Choose your country in a drop-down box. Insert your phone number for verification that you are not a robot.
 - Click on "Next" button under the registration form.
 - Type  confirmation code in the "Code from the SMS" field and click "Next" button.
 - Enter a strong password in "Create password" field and press "Next".
 - In the opened registration form fill out the required fields: name, surname, date of birth, select a gender and click on "Save".

# 2. Register as developer.
##### Indicated an e-mail in your profile. 
  - Go to settings, click on "change e-mail" link.
  - Fill out the required fields: Password and new e-mail, click "Save" button to submit the changes.
  - You will get an email with a link that you will need to click in order to activate your odnoklassniki account.

##### Go to registration [form for access.](http://www.ok.ru/devaccess)
Read and accept the Terms and Conditions of the Agreement and press "Recieve the developer rights".

# 3. Authorization
 Odnoklassniki API uses the OAuth 2.0 protocol for authentication and authorization. To use OAuth you need to have an account on Odnoklassniki and indicated an email in your profie, register as developer [http://ok.ru/devaccess.](http://ok.ru/devaccess) and created new app with one application type (external, android, ios). 

##### Create new app.
- Go to your account.
- Click on a "Game" link in a upper menu.
- In a left menu click "My uploads".
- Click on "Add app" link.
- In appear window enter the required information and then click "Save".

 After that you will see the message "A code has been sent to your email, you will need to enter it while changing app settings". Follow your e-mail to check message about successful registration your app and get more information: 
 ```
 Application id: "{clien_id}"; 
 Publick application code: "{publick_code}"; 
 Secret application code: "{secter_code}";
 ```
 
 ##### Create link for authorization:
 
 ```html
 https://connect.ok.ru/oauth/authorize?client_id={clientId}&scope={scope}&response_type={{response_type}}&redirect_uri={redirectUri}&layout={layout}&state={state}
 ```

 If the user presses Allow, your Application is authorized. The OAuth Dialog will redirect (via HTTP 302) the user's browser to the URL you passed in the redirect_uri parameter with an authorization code:
 
 ```
{return_url}&code={access code}
 ```
 In order to authenticate your Application and get access token, you must pass the authorization code to the API token endpoint at:
 ```
 http://api.odnoklassniki.ru/oauth/token.do.
 ```
 
 Success response JSON
 
 ```
{
  access_token: "{access_token}",
  token_type: "session",
  refresh_token: "{refresh_token}",
  expires_in: "{expires_in}"
}
```

>  Authorization code is valid 2 minutes only

 With a valid access token you can invoke the API by appending the access_token parameter to requests:
 
 ```
 http://api.ok.ru/fb.do?access_token=kjdhfldjfhgldsjhfglkdjfg9ds8fg0sdf8gsd8fg&method=......
 ```
 
 > Call API methods using access_token instead of session_key parameter
Calculate every request signature parameter sig using a little bit different than usual:
`sig = md5( request_params_composed_string+ md5(access_token + application_secret_key)  ).`
Don't include access_token into request_params_composed_string

Every method is available under 2 urls :

1. `[Server Address]fb.do?method=[method_name] - for example http:// http://127.0.0.1:8088/fb.do?method=friends.get`

2. `[Server Address]api/[method_group]/[method_name] - for example http://127.0.0.1:8088/api/friends/get`
 

 Example getting information using getCurrentUser method:
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

  # Ok.ru API with node

The npm module allows you to simplify making API requests into odnoklassniki REST API.

Example usage
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
 
 # JavaScript SDK

Github repository [ok-js-sdk](https://github.com/odnoklassniki/ok-js-sdk).

[Samples with SDK ](https://github.com/odnoklassniki/ok-js-sdk/tree/master/samples).

For using SDK you need:
- copy [oksdk.js](https://github.com/odnoklassniki/ok-js-sdk/blob/master/oksdk.js)
- add next script: `<script type="text/javascript" src="oksdk.js"></script>` inside the head

Initialization:
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
 REST-methods
 ```
OKSDK.REST.call("METHOD_NAME", { fields: "FIELDS"}, function (status, data, error) {
	//callback
});
```

# 4 Useful information

To get more information we need to grant an access to permission 'VALUABLE_ACCESS'.

* users.getInfo - Returns a wide array of user-specific information for each user identifier passed.
* events.get - Returns number of events need to be displayed for the logged user : messages, notifications, feeds, 
* friends.get - Returns users' IDs of the current user's friends. 
* group.getUserGroupsV2 - Retrieves list of the user's groups.
* photos.getPhotos - Provides a list of photos of the user, his/her friend or group.