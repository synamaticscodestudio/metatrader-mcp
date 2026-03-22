# Delete (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Users ](webapi_users.md "Users")/ Delete | [](webapi_user_update.md "Update") [](webapi_user_get.md "Get by Login") |
| --- | --- | --- |
| --- | --- |

Deleting a User
This request allows to delete a user account with the specified login.
Request format
GET /api/user/delete?login=login POST /api/user/delete?login=login  
---  
Response format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/user/delete?login=73339 //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * login — the login of an account which should be deleted.

Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.

Notes
  * A user account can be deleted only when connecting to the same trade server where the account is located. If an account with the specified login is not found, code [13](retcodes_common.md "Common errors") is returned.
  * Accounts that belong to manager and administrator groups cannot be deleted.
