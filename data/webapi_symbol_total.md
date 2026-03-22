# Get Total (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Symbols ](webapi_symbols.md "Symbols")/ Get Total | [](webapi_symbol_shift.md "Shift") [](webapi_symbol_list.md "Get List") |
| --- | --- | --- |
| --- | --- |

Getting a Number of Symbols
This request allows to receive the number of symbols available on a trade server.
Request format
GET /api/symbol/total POST /api/symbol/total  
---  
Response format
{ "retcode" : "code description", "answer" : { "Total" : "zzzz" } }  
---  
Example
//--- request to the server GET /api/symbol/total //--- server response { "retcode" : "0 Done", "answer" : { "Total" : "563" } }  
---  
Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.
  * total — the number of symbols on a server.
