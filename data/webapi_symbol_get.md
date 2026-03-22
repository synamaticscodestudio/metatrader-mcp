# Get by Name or Mask (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Symbols ](webapi_symbols.md "Symbols")/ Get by Name or Mask | [](webapi_symbol_next.md "Get by Index") [](webapi_symbol_get_group.md "Get by Group") |
| --- | --- | --- |
| --- | --- |

Get symbols by name or mask
Use this request to receive a configuration of one or more symbols by name or mask.
Request format
GET /api/symbol/get?symbol=name GET /api/symbol/get?mask=mask POST /api/symbol/get?symbol=name POST /api/symbol/get?mask=mask  
---  
Response format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/symbol/get?symbol=EURUSD //--- server response { "retcode" : "0 Done", "answer" : {  "Symbol" : "EURUSD", "Path" : "Forex\\\Major\\\EURUSD", "ISIN" : "", "Description" : "Euro vs US Dollar", "International" : "", "Basis" : "", "Source" : "", "Page" : "http://www.google.com/finance?q=EURUSD", ... } //--- request to the server GET /api/symbol/get?mask=* //--- server response { "retcode" : "0 Done", "answer" : [ { "Symbol" : "EURUSD", "Path" : "Forex\\\Major\\\EURUSD", "ISIN" : "", "Description" : "Euro vs US Dollar", "International" : "", "Basis" : "", "Source" : "", "Page" : "http://www.google.com/finance?q=EURUSD", ... }, { "Symbol" : "GBPUSD", "Path" : "Forex\\\Major\\\GBPUSD", "ISIN" : "", "Description" : "Pound vs US Dollar", "International" : "", "Basis" : "", "Source" : "", "Page" : "http://www.google.com/finance?q=GBPUSD", ... }, ] }  
---  
Request Parameters
  * symbol — symbol name when requesting one configuration.
  * mask — one or more symbols separated by commas. Specify the full name of the symbol, including the path. For example, Forex\EURUSD. Symbols can also be specified using wildcard characters: "*" (any value) and "!" (exclude). For example, Forex\\*,!Forex\EURUSD — all symbols in the Forex subgroup except EURUSD. For queries by mask, the server can return no more than 5,000 configurations. If the limit is exceeded, the first 5,000 records will be returned and the command will additionally return [response code 14](retcodes_common.md "Common errors").

Use only one of the parameters in the query: symbol or mask. If both parameters are specified, the request will only return information for the symbol specified in 'symbol'.  
---  
Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.
  * answer — symbol configuration in JSON format. A complete description of the passed parameters of symbols is given in the ["Data structure"](webapi_symbol_data_structure.md "Data Structure") section. For queries by mask, the response is always sent as a JSON list (array), even if the request resulted in one or no configuration.
