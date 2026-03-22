# Get Total (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Users ](webapi_users.md "Users")/ Get Total | [](webapi_user_logins.md "Get List") [](webapi_user_group.md "Get Group") |
| --- | --- | --- |
| --- | --- |

Get the Total Number of Users
Use the request to obtain the total number of users on the trading server, available to your manager account.
Request format
GET /api/user/total POST /api/user/total  
---  
Response format
{ "retcode" : "code description", "answer" : { "Total" : "number" } }  
---  
Example
//--- request to the server GET /api/user/total //--- server response { "retcode" : "0 Done", "answer" : { "Total" : "563" } }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * total — number of users on the server.
