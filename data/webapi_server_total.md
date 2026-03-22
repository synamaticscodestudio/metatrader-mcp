# Get Number of Servers (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Network ](webapi_network.md "Network")/ Get Number of Servers | [](webapi_server_shift.md "Shift Server") [](webapi_server_next.md "Get Server by Index") |
| --- | --- | --- |
| --- | --- |

Get Number of Servers
The request allows receiving the number of server configurations available in the platform.
Request format
GET /api/server/total POST /api/server/total  
---  
Response format
{ "retcode" : "code description", "answer" : { "Total" : "number" } }  
---  
Example
//--- request to the server GET /api/server/total //--- server response { "retcode" : "0 Done", "answer" : { "Total" : "11" } }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * total — number of server configurations in the trading platform.
