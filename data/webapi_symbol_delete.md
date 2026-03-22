# Delete (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Symbols ](webapi_symbols.md "Symbols")/ Delete | [](webapi_symbol_add_batch.md "Add Multiple") [](webapi_symbol_delete_batch.md "Delete Multiple") |
| --- | --- | --- |
| --- | --- |

Deleting a Symbol
Using this request you can delete a symbol with the specified name.
Request format
GET /api/symbol/delete?symbol=name POST /api/symbol/delete?symbol=name  
---  
Response format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/symbol/delete?group=EURUSD //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * symbol — the name of the symbol to delete.

Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.

Notes
  * This command works only when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * To run the command, [the manager account](webapi_rest_authentication.htm#client_start) must have rights to connect as an administrator and edit symbol configurations. Otherwise, it returns the error code [8](retcodes_common.md "Common errors").
