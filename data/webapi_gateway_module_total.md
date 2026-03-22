# Get Total Modules (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Gateways ](webapi_gateway.md "Gateways")/ Get Total Modules | [](webapi_gateway_get_all.md "Get All") [](webapi_gateway_module_next.md "Get Module by Index") |
| --- | --- | --- |
| --- | --- |

Get Total Gateway Modules
The request allows receiving the number of gateway modules available in the platform.
Request Format
GET /api/gateway/module/total POST /api/gateway/module/total  
---  
Response Format
{ "retcode" : "code description", "answer" : { "Total" : "number" } }  
---  
Example
//--- request to the server GET /api/gateway/module/total //--- server response { "retcode" : "0 Done", "answer" : { "Total" : "11" } }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * total — number of gateway modules in the trading platform.
