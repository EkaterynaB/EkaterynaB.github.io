1. Create an account in Odnoklassniki.ru. 
Go to [Odnoklassniki.ru](https://ok.ru/).
Click on the "Registration" link in the log box (the upper-right coner of the home page).
Choose your country in a drop-down box. Supply a phone number for verification that you are not a robot.
Click on "Next" button under the registration form.
Type  confirmation code in the "Code from the SMS" field and click "Next" button.
Enter a strong password in "Create password" field and press "Next".
In the opened registration form fill out the required fields: name, surname, date of birth, select a gender and click on "Save".

2. 
To get developer right you need to indicated an e-mail in your profie. Go to settings, click on "change e-mail" link and fill out the required fields: Password and new e-mail press "save" button to submit the changes.
After that, you will receive an email with a link that you will need to click in order to activate your odnoklassniki account.
Then go to registration [form for access.](http://www.ok.ru/devaccess) Read and accept the Terms and Conditions of the Agreement and press "Recieve the developer rights".

3.Authorization
Odnoklassniki.ru API uses the OAuth 2.0 protocol for authentication and authorization. To use OAuth you need to have an account on Odnoklassniki and indicated an email in your profie.
Register as developer [http://ok.ru/devaccess](http://ok.ru/devaccess)
Create new app with one application type (external, android, ios). 

To create new app you need in your accout click on a "Game" tab, then in a left menu click "My uploads". Click on "Add app" link.
In appear window enter the required information and then click save. 
 (you must insert application ID in the client_id parameter and the URL that the user's browser will be redirected back to once app authorization is completed (the redirect_uri parameter))
 After that you will see the message "A code has been sent to your email, you will need to enter it while changing app settings". Follow yur e-mail to check message about secessful registration your app and get intire information. 
 Application id: "";
 Publick application code: "";
 Secret application code: "";

To get Authorisation Ok you can use JavaScript SDK. 
Before use SDK, you need to check in application settings:
 * including client authentication
 * in redirect_uri added then transmitted to the config and / or the current url
 * the application has the necessary rights for the operation, for native applications is recommended to have and request LONG_ACCESS_TOKEN

For using SDK you need:
copy oksdk.js (https://github.com/odnoklassniki/ok-js-sdk/blob/master/oksdk.js)
add to head your app next script: <script type="text/javascript" src="oksdk.js"></script>

var config = {
    app_id: "", //insert app id
    app_key: '' //insert APP PUBLIC KEY
};

OKSDK.init(config, function () {

}, function (error) {

});

//invoke REST-methods.
OKSDK.REST.call("METHOD_NAME", { fields: "FIELDS"}, function (status, data, error) {
	//callback
});



******
Redirect by your server. Create link to authoriztion.

https://connect.ok.ru/oauth/authorize?client_id={clientId}&scope={scope}&response_type={responseType}&redirect_uri={redirectUri}

follow this link User will be redirected to the url, we have indicated in the app settings.

If the user presses Allow, your Application is authorized. The OAuth Dialog will redirect (via HTTP 302) the user's browser to the URL you passed in the redirect_uri parameter with an authorization code:

{return_url}&code={access code}

With this code in hand, you can proceed to the next step, app authentication, to gain the access token you need to make API calls.

In order to authenticate your Application and get access token, you must pass the authorization code to the API token endpoint at http://api.odnoklassniki.ru/oauth/token.do.

Success response JSON

{
  access_token: 'access_token',
  token_type: 'session',
  refresh_token: 'refresh_token',
  expires_in: '1800'
}

With a valid access token you can invoke the API by appending the access_token parameter to requests and get Ures information. 

http://api.ok.ru/fb.do?access_token={access_token}&method=......
