# Get Total (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Groups ](webapi_groups.md "Groups")/ Get Total | [](webapi_group_shift.md "Shift") [](webapi_group_list.md "Get List") |
| --- | --- | --- |
| --- | --- |

Getting a number of groups
This request allows to receive the number of groups available on a trade server.
Request format
GET /api/group/total POST /api/group/total  
---  
Response format
{ "retcode" : "code description", "answer" : { "Total" : "number" } }  
---  
Example
//--- request to the server GET /api/group/total //--- server response { "retcode" : "0 Done", "answer" : { "Total" : "563" } }  
---  
Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.
  * total — the number of groups on a server.
