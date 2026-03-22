# Get Subgroup Total (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Symbols ](webapi_symbols.md "Symbols")/ Get Subgroup Total | [](webapi_symbol_group_shift.md "Shift Subgroup") [](webapi_symbol_group_next.md "Get Subgroup by Index") |
| --- | --- | --- |
| --- | --- |

Get the Number of Subgroups
Get the total number of symbol subgroups existing in the platform.
Request Format
GET /api/symbol_group/total POST /api/symbol_group/total  
---  
Response Format
{ "retcode" : "code description", "answer" : { "Total" : "zzzz" } }  
---  
Example
//--- request to the server GET /api/symbol_group/total //--- server response { "retcode" : "0 Done", "answer" : { "Total" : "563" } }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * total — the total number of symbol subgroups on the server.

Note
The request takes into account the availability of symbols for the manager account which is used for [connecting to the server](webapi_rest_authentication.md "Authentication").