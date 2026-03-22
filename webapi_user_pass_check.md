# Check Password (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Users ](webapi_users.md "Users")/ Check Password | [](webapi_user_get_batch.md "Get Multiple") [](webapi_user_pass_change.md "Change Password") |
| --- | --- | --- |
| --- | --- |

Checking User Password
This request allows to check a user's password.
Request format
GET /api/user/check_password?login=login&type=type&password=password POST /api/user/check_password {  "Login" : "login", "Type" : "type", "Password" : "password", }  
---  
Response format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server POST /api/user/check_password {  "Login" : "764636", "Type" : "main", "Password" : "ps12Rt12" } //--- server response { "retcode" : "3006 Invalid account password" }  
---  
Request Parameters
  * login — the login of an account for which a password needs to be checked.
  * type — the type of the password that needs to be checked:
    * main — the master password.
    * investor — the investor password.
    * api — the password used by the API clients for connection.
  * password — the password that needs to be checked be checked. For security reasons, we recommend sending the password in an additional body rather than in the request parameters.

  * Client description can be passed in the command parameters, in an additional body in the JSON format, or both at once. A description passed in an additional body has higher priority.

  * We strongly urge you against passing passwords in the command parameters since request addresses may be logged/cached by intermediary network devices the request passes through on its way from the client to the server. Always send passwords in an additional request body.

  
---  
Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code will be returned. For example, code [3006](retcodes_clients.md "User management") indicates that the password is incorrect.
