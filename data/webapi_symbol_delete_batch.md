# Delete Multiple (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Symbols ](webapi_symbols.md "Symbols")/ Delete Multiple | [](webapi_symbol_delete.md "Delete") [](webapi_symbol_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

Delete multiple symbols
The request allows deleting multiple symbols from the server.
Request format
GET /api/symbol/delete_batch?symbol=list of names GET /api/symbol/delete_batch?name=list of names GET /api/symbol/delete_batch?index=list of indexes POST /api/symbol/delete_batch?symbol=list of names POST /api/symbol/delete_batch?name=list of names POST /api/symbol/delete_batch?index=list of indexes POST [list of indexes]  
---  
Response format
{ "retcode" : "code description", "answer" : [ response codes ] }  
---  
Example
//--- request to the server GET /api/symbol/delete_batch?symbol=EURUSD,GBPUSD //--- server response { "retcode" : "0 Done", "answer" : [ 0, 13, 0  ] }  
---  
Request Parameters
  * symbol — names of symbols to be deleted, separated by commas. The names are specified together with the path.
  * name — names of symbols to be deleted, separated by commas. The names are specified together with the path.
  * index — indexes of symbols to be deleted, separated by commas. Symbol Group numbering starts with 0.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — array of response codes regarding deletion of each of the specified groups.

Note
  * This request works only when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * To run the request, [the manager account](webapi_rest_authentication.htm#client_start) must have rights to connect as an administrator and edit symbol configurations. Otherwise, the error code [8](retcodes_common.md "Common errors") is returned.
