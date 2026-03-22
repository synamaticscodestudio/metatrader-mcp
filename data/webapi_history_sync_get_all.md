# Get All (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ History Synchronization ](webapi_history_sync.md "History Synchronization")/ Get All | [](webapi_history_sync_next.md "Get by Index") [](webapi_spread.md "Spreads") |
| --- | --- | --- |
| --- | --- |

Get All History Sync Configurations
Get all existing history synchronization configurations.
Request Format
GET /api/history_sync/get_all POST /api/history_sync/get_all  
---  
Response Format
{ "retcode" : "code description", "answer" : [ { description }, { description }, { description }, ... ] }  
---  
Example
//--- request to the server GET /api/history_sync/get_all //--- server response { "retcode" : "0 Done", "answer" : [ { "Enable" : "1", "Server" : "access.metatrader5.com:443", "ServerType" : "1", "Mode" : "0", "From" : "0", "To" : "0", "TimeCorrect" : "-1500", "Flags" : "0", ... }, { "Enable" : "0", "Server" : "backup.metatrader5.com:443", "ServerType" : "1", "Mode" : "0", "From" : "0", "To" : "0", "TimeCorrect" : "-1500", "Flags" : "0", ... }, ] }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — an array with descriptions of configurations in JSON format. The complete description of passed parameters is available under the ["Data Structure"](webapi_history_sync_data_structure.md "Data Structure") section.
