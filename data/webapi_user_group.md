# Get Group (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Users ](webapi_users.md "Users")/ Get Group | [](webapi_user_total.md "Get Total") [](webapi_user_cert_update.md "Update Certificate") |
| --- | --- | --- |
| --- | --- |

Get User Group by Login
The request allows receiving a user group by the user login.
Request format
GET /api/user/group?login=login POST /api/user/group?login=login  
---  
Response format
{ "retcode" : "code description", "answer" : { "Group" : "group" } }  
---  
Example
//--- request to the server GET /api/user/group?login=126993 //--- server response { "retcode" : "0 Done", "answer" : { "Group" : "demo\\\demoforex" } }  
---  
Request Parameters
  * login — the login of the user whose group you want to receive.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * group — the name of the group to which the user belongs.
