# Move to Archvie (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Users ](webapi_users.md "Users")/ Move to Archvie | [](webapi_user_balance_check.md "Check Balance") [](webapi_user_archive_get.md "Get from Archive") |
| --- | --- | --- |
| --- | --- |

Move User to Archive
The request allows moving a user to archive.
Request format
GET /api/user/archive/add?login=login POST /api/user/archive/add?login=login  
---  
Response format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/user/archive/add?login=126993 //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * login — the login of the user to be moved to the archive database.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
