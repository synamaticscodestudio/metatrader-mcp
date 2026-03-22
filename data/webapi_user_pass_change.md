# Change Password (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Users ](webapi_users.md "Users")/ Change Password | [](webapi_user_pass_check.md "Check Password") [](webapi_user_account_get.md "Get Trade State") |
| --- | --- | --- |
| --- | --- |

Changing the User Password
This request allows to change the password of a client.
Request format
GET /api/user/change_password?login=login&type=type&password=password POST /api/user/change_password {  "Login" : "login", "Type" : "type", "Password" : "password", }  
---  
Response format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server POST /api/user/change_password {  "Login" : "764636", "Type" : "main", "Password" : "ps12Rt12" } //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * login — the login of an account for which a password should be changed.
  * type — the type of the password that should be changed:
    * main — the master password.
    * investor — the investor password.
    * api — the password used by the API clients for connection.
  * password — new password. The password must contain four character types: lowercase letters, uppercase letters, numbers, and [special characters](https://learn.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/term-collections/special-characters) (#, @, ! etc.). For example, 1Ar#pqkj. The minimum password length is determined by [group](webapi_groups.md "Groups") settings, while the lowest possible value is 8 characters. The maximum length is 16 characters. For security reasons, we recommend sending the password in an additional body rather than in the request parameters.

  * Client description can be passed in the command parameters, in an additional body in the JSON format, or both at once. A description passed in an additional body has higher priority.

  * We strongly urge you against passing passwords in the command parameters since request addresses may be logged/cached by intermediary network devices the request passes through on its way from the client to the server. Always send passwords in an additional request body.

  
---  
Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.

Notes
The main, investor and API passwords must comply with the security requirements: a password must contain at least two of three types of characters (lower case, upper case and digits) and meet the minimum length requirements set for the [group](webapi_groups.md "Groups").