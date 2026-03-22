# Add Multiple (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Symbols ](webapi_symbols.md "Symbols")/ Add Multiple | [](webapi_symbol_add.md "Add") [](webapi_symbol_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

Add Multiple Symbols
The request allows creating or updating multiple symbols on a server.
Request format
POST /api/symbol/add_batch [ Descriptions of symbols to be created, in JSON format ]  
---  
Response format
{ "retcode" : "code description", "answer" : [ Description of created symbols in JSON format ] }  
---  
Example
//--- request to the server POST /api/symbol/add [ { "Symbol" : "EURUSD", "Path" : "Forex\\\Major\\\EURUSD", "ISIN" : "", "Description" : "Euro vs US Dollar", ... }, { "Symbol" : "GBPUSD", "Path" : "Forex\\\Major\\\GBPUSD", "ISIN" : "", "Description" : "Pound vs US Dollar", ... }, ] //--- server response [ { "retcode" : "0 Done", "answer" : { "Symbol" : "EURUSD", "Path" : "Forex\\\Major\\\EURUSD", "ISIN" : "", "Description" : "Euro vs US Dollar", ... } }, { "retcode" : "0 Done", "answer" : { "Symbol" : "GBPUSD", "Path" : "Forex\\\Major\\\GBPUSD", "ISIN" : "", "Description" : "Pound vs US Dollar", ... } }, ]  
---  
Request Parameters
The request has no parameters. The description of the symbols is passed in the JSON format as an additional body. When adding a symbol, all its [parameters](webapi_symbol_data_structure.htm#symbol) must be described.
The JSON description of the symbols passed when creating is the same as the description returned by the server.
Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — parameters of created symbols, in JSON format. The full description of passed symbol parameters is available under the ["Data structure"](webapi_symbol_data_structure.htm#symbol) section.

Note
  * This request works only when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * When the request is run, the existence of the symbols to be added is checked. A key field for comparison is the symbol name. If such a symbol already exists, its settings are updated.
  * When you update the configuration, only those symbol parameters that are explicitly specified in the JSON description, are changed. Other parameters stay unchanged.
  * The record correctness is checked before the configuration is added. If the record is incorrect, the error code [3](retcodes_common.md "Common errors") is returned.
  * To run the request, [the manager account](webapi_rest_authentication.htm#client_start) must have rights to connect as an administrator ([IMTConManager::RIGHT_ADMIN](imtconmanager_enum.htm#enmanagerrights)) and edit symbol configurations ([IMTConManager::RIGHT_CFG_SYMBOLS](imtconmanager_enum.htm#enmanagerrights)). Otherwise, the error code [8](retcodes_common.md "Common errors") is returned.
