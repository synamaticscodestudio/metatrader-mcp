# Start (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ History Synchronization ](webapi_history_sync.md "History Synchronization")/ Start | [](webapi_history_sync_data_structure.md "Data Structure") [](webapi_history_sync_add.md "Add") |
| --- | --- | --- |
| --- | --- |

Start History Synchronization
The request allows starting history synchronization in accordance with configuration settings.
Request Format
GET /api/history_sync/start POST /api/history_sync/start  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/history_sync/start //--- server response { "retcode" : "0 Done" }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned. If an index of a nonexistent manager is requested, the response code [13](retcodes_common.md "Common errors") is returned.
