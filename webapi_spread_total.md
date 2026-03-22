# Get Total (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Spreads ](webapi_spread.md "Spreads")/ Get Total | [](webapi_spread_shift.md "Shift") [](webapi_spread_next.md "Get by Index") |
| --- | --- | --- |
| --- | --- |

Get the Number of Configurations
The request allows receiving the number of spread configurations available in the platform.
Request Format
GET /api/spread/total POST /api/spread/total  
---  
Response Format
{ "retcode" : "code description", "answer" : { "Total" : "number" } }  
---  
Example
//--- request to the server GET /api/spread/total //--- server response { "retcode" : "0 Done", "answer" : { "Total" : "11" } }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * total — the number of spread configurations in the trading platform.
