# Get by Group (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Symbols ](webapi_symbols.md "Symbols")/ Get by Group | [](webapi_symbol_get.md "Get by Name or Mask") [](webapi_symbol_group_add.md "Add Subgroup") |
| --- | --- | --- |
| --- | --- |

Get a Symbol by Group
This request allows to receive symbol configuration for a group by the symbol name.
Request format
GET /api/symbol/get_group?symbol=name&group=name POST /api/symbol/get?symbol=name&group=name  
---  
Response format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/symbol/get_group?symbol=EURUSD&group=demo\\\forex //--- server response { "retcode" : "0 Done", "answer" : {  "Symbol" : "EURUSD", "Path" : "Forex\\\Major\\\EURUSD", "ISIN" : "", "Description" : "Euro vs US Dollar", "International" : "", "Basis" : "", "Source" : "", "Page" : "http://www.google.com/finance?q=EURUSD", ... }  
---  
Request Parameters
  * symbol — symbol name.
  * group — the name of the group for which we get the symbol configuration.

Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.
  * answer — symbol configuration in JSON format. A complete description of the passed parameters of symbols is given in the ["Data structure"](webapi_symbol_data_structure.md "Data Structure") section.
