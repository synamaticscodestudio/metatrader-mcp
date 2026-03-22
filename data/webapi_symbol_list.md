# Get List (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Symbols ](webapi_symbols.md "Symbols")/ Get List | [](webapi_symbol_total.md "Get Total") [](webapi_symbol_next.md "Get by Index") |
| --- | --- | --- |
| --- | --- |

Getting a list of symbols
This request allows receiving the list of symbols available on the trading server.
Request Format
GET /api/symbol/list POST /api/symbol/list  
---  
Response Format
{ "retcode" : "code description", "answer" : [ list of symbols ] }  
---  
Example
//--- request to the server GET /api/symbol/list //--- server response { "retcode" : "0 Done", "answer" : [ EURUSD, GBPUSD, USDCHF ] }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — list of available symbols.

Note
The request takes into account the availability of symbols for the manager account which is used for [connection to the server](webapi_rest_authentication.md "Authentication").