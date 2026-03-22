# Confirm Certificate (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Users ](webapi_users.md "Users")/ Confirm Certificate | [](webapi_user_cert_delete.md "Delete Certificate") [](webapi_user_otp_secret_get.md "Get OTP Key") |
| --- | --- | --- |
| --- | --- |

Confirm user certificate
This request enables the confirmation of a user certificate if such a confirmation is required by the relevant group settings.
Request Format
GET /api/user/certificate/confirm?login=login POST /api/user/certificate/confirm?login=login  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/user/certificate/confirm?login=61232 //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * login — the login of the user whose certificate you want to confirm.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
Certificate confirmation provides extended security for accounts. It is impossible to log in using a certificate until it is confirmed. The confirmation mode is enabled in group settings.