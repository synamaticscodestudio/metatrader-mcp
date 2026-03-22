# Shift (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Symbols ](webapi_symbols.md "Symbols")/ Shift | [](webapi_symbol_delete_batch.md "Delete Multiple") [](webapi_symbol_total.md "Get Total") |
| --- | --- | --- |
| --- | --- |

Shift Symbols
The requests allows changing of a symbol configuration position in a list.
Request format
GET /api/symbol/shift?index=index&shift=shift POST /api/symbol/shift?index=index&shift=shift  
---  
Response format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/symbol/shift?index0&shift=2 //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * index — position of configuration to be shifted, starting from 0. Multiple IDs can be specified as separated by commas.
  * shift — shift of the configuration relative to its current position. A negative value means the shift towards the top of the list, a positive value means shifting towards its end.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
  * The request only works when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * To run the request, [the manager account](webapi_rest_authentication.htm#client_start) must have rights to connect as an administrator and edit symbol configurations. Otherwise, the error code [8](retcodes_common.md "Common errors") is returned.
