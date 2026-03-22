# Get by Index (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Symbols ](webapi_symbols.md "Symbols")/ Get by Index | [](webapi_symbol_list.md "Get List") [](webapi_symbol_get.md "Get by Name or Mask") |
| --- | --- | --- |
| --- | --- |

Getting a Symbol by Index
Get the configuration of one or more symbols by index in the list.
Request format
GET /api/symbol/next?index=index&count=number POST /api/symbol/next?index=index&count=number  
---  
Response format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/symbol/next?index=0 //--- server response { "retcode" : "0 Done", "answer" : {  "Symbol" : "EURUSD", "Path" : "Forex\\\Major\\\EURUSD", "ISIN" : "", "Description" : "Euro vs US Dollar", "International" : "", "Basis" : "", "Source" : "", "Page" : "http://www.google.com/finance?q=EURUSD", ... }  
---  
Request Parameters
  * index — index of the symbol starting with 0.
  * count — the number of configurations to get. If the parameter is not set or is equal to 1, the query returns one object with a configuration description. If count > 1, the query will return an array of objects. For example, when sending a query with parameters ?index=1&count=3, you will get three configurations, from the second to the fourth one.

Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code will be returned. If an index of a nonexistent symbol is requested, the response code [13](retcodes_common.md "Common errors") is returned.
  * answer — symbol configuration in JSON format. A complete description of the passed parameters of symbols is given in the ["Data structure"](webapi_symbol_data_structure.md "Data Structure") section.
