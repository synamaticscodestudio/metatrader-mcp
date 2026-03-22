# Add (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Symbols ](webapi_symbols.md "Symbols")/ Add | [](webapi_symbol_data_structure.md "Data Structure") [](webapi_symbol_add_batch.md "Add Multiple") |
| --- | --- | --- |
| --- | --- |

Adding a Symbol
Using this request you can create or change a symbol on a server.
Request format
POST /api/symbol/add { Description of a symbol being created in JSON format }  
---  
Response format
{ "retcode" : "code description", "answer" : { Description of the created symbol in JSON format } }  
---  
Example
//--- request to the server POST /api/symbol/add { "Symbol" : "EURUSD", "Path" : "Forex\\\Major\\\EURUSD", "ISIN" : "", "Description" : "Euro vs US Dollar", ... } //--- server response { "retcode" : "0 Done", "answer" : { "Symbol" : "EURUSD", "Path" : "Forex\\\Major\\\EURUSD", "ISIN" : "", "Description" : "Euro vs US Dollar", ... } }  
---  
Request Parameters
This command has no parameters. Description of the symbol is passed in the JSON format as an additional command body. When adding a symbols, all its [parameters](webapi_symbol_data_structure.htm#symbol) must be described.
The JSON description of the symbol passed when creating is the same as the description returned by the server.
Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.
  * answer — parameters of the created symbol in JSON format. A complete description of the passed parameters of symbols is given in the ["Data structure"](webapi_symbol_data_structure.htm#symbol) section.

Notes
  * This command works only when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * When the command is run the presence of the symbol you are adding is checked. A key field for comparison is the name of the symbol. If such a symbol already exists, its settings are updated.
  * When you update the configuration, only those parameters that are explicitly specified in the JSON description are changed. Other parameters stay unchanged.
  * Before adding, the correctness of the record is checked. If the entry is incorrect, it returns the error code [3](retcodes_common.md "Common errors").
  * To run the command, [the manager account](webapi_rest_authentication.htm#client_start) must have rights to connect as an administrator ([IMTConManager::RIGHT_ADMIN](imtconmanager_enum.htm#enmanagerrights)) and edit symbol configurations ([IMTConManager::RIGHT_CFG_SYMBOLS](imtconmanager_enum.htm#enmanagerrights)). Otherwise, it returns the error code [8](retcodes_common.md "Common errors").
