# Shift Subgroup (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Symbols ](webapi_symbols.md "Symbols")/ Shift Subgroup | [](webapi_symbol_group_delete.md "Delete Subgroup") [](webapi_symbol_group_total.md "Get Subgroup Total") |
| --- | --- | --- |
| --- | --- |

Subgroup Shift
Change the position of a subgroup of symbols in a list.
Request Format
GET /api/symbol_group/shift?index=index&shift=shift POST /api/symbol_group/shift?index=index&shift=shift  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/symbol_group/shift?index0&shift=2 //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * index — the position of the subgroup you want to shift, starting with 0.

  * shift — the shift of the subgroup relative to its current position. A negative value means shifting towards the top of the list, a positive value means shifting towards its end.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
The command only works when connected to the main trading server. Otherwise, error [12001](retcodes_api.md "API") is returned.