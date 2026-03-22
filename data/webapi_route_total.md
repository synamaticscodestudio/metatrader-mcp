# Get Total (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Routing ](webapi_route.md "Routing")/ Get Total | [](webapi_route_shift.md "Shift") [](webapi_route_next.md "Get by Index") |
| --- | --- | --- |
| --- | --- |

Get the Total Number of Routing Rules
The request allows receiving the number of routing rules available in the platform.
Request Format
GET /api/route/total POST /api/route/total  
---  
Response Format
{ "retcode" : "code description", "answer" : { "Total" : "number" } }  
---  
Example
//--- request to the server GET /api/route/total //--- server response { "retcode" : "0 Done", "answer" : { "Total" : "11" } }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * total — number of routing rules in the trading platform.
