# Get Subgroup List (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Symbols ](webapi_symbols.md "Symbols")/ Get Subgroup List | [](webapi_symbol_group_next.md "Get Subgroup by Index") [](webapi_leverage.md "Floating Margin") |
| --- | --- | --- |
| --- | --- |

Get a List of Subgroups
Get a list of symbol subgroups available on the trading server.
Request Format
GET /api/symbol_group/list POST /api/symbol_group/list  
---  
Response Format
{ "retcode" : "code description", "answer" : [ list of subgroups ] }  
---  
Example
//--- request to the server GET /api/symbol_group/list //--- server response { "retcode" : "0 Done", "answer" : [  "Forex", "Futures", "Preliminary", "Collateral" ] }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned. If an index of a non-existent symbol is requested, the response code [13](retcodes_common.md "Common errors") is returned.
  * answer — list of available subgroups.
