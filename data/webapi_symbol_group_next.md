# Get Subgroup by Index (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Symbols ](webapi_symbols.md "Symbols")/ Get Subgroup by Index | [](webapi_symbol_group_total.md "Get Subgroup Total") [](webapi_symbol_group_exist.md "Get Subgroup List") |
| --- | --- | --- |
| --- | --- |

Get a Subgroup by Index
Get the name of a subgroup of symbols by index.
Request Format
GET /api/symbol_group/next?index=index POST /api/symbol_group/next?index=index  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/symbol_group/next?index=0 //--- server response { "retcode" : "0 Done", "answer" : {  "Name" : "Forex\\\Major" } }  
---  
Request Parameters
  * index — index of the symbol subgroup, starting from 0.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned. If an index of a non-existent symbol is requested, the response code [13](retcodes_common.md "Common errors") is returned.
  * name — the name of a subgroup of symbols in JSON format.
