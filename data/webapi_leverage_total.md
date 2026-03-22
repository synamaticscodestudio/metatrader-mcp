# Get total (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Floating Margin ](webapi_leverage.md "Floating Margin")/ Get Total | [](webapi_leverage_shift.md "Shift") [](webapi_leverage_next.md "Get by Index") |
| --- | --- | --- |
| --- | --- |

Get the Number of Configurations
Getting the number of floating margin configurations existing on the trading server.
Request Format
GET /api/leverage/total POST /api/leverage/total  
---  
Response Format
{ "retcode" : "code description", "answer" : { "Total" : "zzzz" } }  
---  
Example
//--- request to the server GET /api/leverage/total //--- server response { "retcode" : "0 Done", "answer" : { "Total" : "24" } }  
---  
Response Parameters
  * retcode — if successful, the command returns [response code](retcodes_successful.md "Successful completion") 0\. Otherwise, the code of the encountered error is returned.
  * total — total number of configurations on the server.
