# Delete Certificate (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Users ](webapi_users.md "Users")/ Delete Certificate | [](webapi_user_cert_get.md "Get Certificate") [](webapi_user_cert_confirm.md "Confirm Certificate") |
| --- | --- | --- |
| --- | --- |

Delete User Certificate
The request allows deleting a user certificate.
Request format
GET /api/user/certificate/delete?login=login POST /api/user/certificate/delete?login=login  
---  
Response format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/user/certificate/delete?login=61232 //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * login — the login of the user whose certificate you want to delete.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
If the extended authorization mode is used for the group to which the account belongs, then using this request the previously issued certificate can be reset.  After that, authorization with the certificate will be impossible, and a new certificate will be issued during the next attempt of the account to connect to the server.