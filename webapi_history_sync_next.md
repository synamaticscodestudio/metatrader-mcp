# Get by Index (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ History Synchronization ](webapi_history_sync.md "History Synchronization")/ Get by Index | [](webapi_history_sync_total.md "Get Total") [](webapi_history_sync_get_all.md "Get All") |
| --- | --- | --- |
| --- | --- |

Get Configuration by Index
Get one or more history synchronization configurations by index in the list.
Request Format
GET /api/history_sync/next?index=index&count=number POST /api/history_sync/next?index=index&count=number  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/history_sync/next?index=0 //--- server response { "retcode" : "0 Done", "answer" : { "Enable" : "1", "Server" : "access.metatrader5.com:443", "ServerType" : "1", "Mode" : "0", "From" : "0", "To" : "0", "TimeCorrect" : "-1500", "Flags" : "0", "Data" : "2", "Symbols" : [ { "Path" : "*" } ] } }  
---  
Request Parameters
  * index — index of the history synchronization configuration starting with 0.
  * count — the number of configurations to get. If the parameter is not set or is equal to 1, the query returns one object with a configuration description. If count > 1, the query will return an array of objects. For example, when sending a query with parameters ?index=1&count=3, you will get three configurations, from the second to the fourth one.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned. If an index of a nonexistent configuration is requested, the response code [13](retcodes_common.md "Common errors") is returned.
  * answer — description of the configuration in JSON format. The complete description of passed parameters is available under the ["Data structure"](webapi_history_sync_data_structure.md "Data Structure") section.
