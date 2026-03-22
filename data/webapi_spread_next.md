# Get by Index (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Spreads ](webapi_spread.md "Spreads")/ Get by Index | [](webapi_spread_total.md "Get Total") [](webapi_spread_get_all.md "Get All") |
| --- | --- | --- |
| --- | --- |

Get Configuration by Index
Get one or more spread configurations by index in the list.
Request Format
GET /api/spread/next?index=index&count=number POST /api/spread/next?index=index&count=number  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/spread/next?index=0 //--- server response { "retcode" : "0 Done", "answer" : { "ID" : "2", "Flags" : "0", "MarginInitial" : "0.00000000", "MarginMaintenance" : "0.00000000", "MarginType" : "1", "LegsA" : [ { "Mode" : "1", "Flags" : "0", "Symbol" : "APL-9.20", "TimeFrom" : "1564490700", "TimeTo" : "1590842700", "Ratio" : "1.00000000" } ], "LegsB" : [ { "Mode" : "1", "Flags" : "0", "Symbol" : "APL-12.20", "TimeFrom" : "1564490700", "TimeTo" : "1590842700", "Ratio" : "1.00000000" } ] } }  
---  
Request Parameters
  * index — spread configuration index starting with 0.
  * count — the number of configurations to get. If the parameter is not set or is equal to 1, the query returns one object with a configuration description. If count > 1, the query will return an array of objects. For example, when sending a query with parameters ?index=1&count=3, you will get three configurations, from the second to the fourth one.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned. If a nonexistent configuration index is requested, the response code [13](retcodes_common.md "Common errors") is returned.
  * answer — spread configuration description in JSON format. The complete description of passed server parameters is available under the ["Data structure"](webapi_spread_data_structure.md "Data Structure") section.
