# Delete (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ History Synchronization ](webapi_history_sync.md "History Synchronization")/ Delete | [](webapi_history_sync_add.md "Add") [](webapi_history_sync_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

Delete Configuration
The request allows deleting history synchronization configurations from the trading platform.
Request Format
GET /api/history/delete?index=indices POST /api/history/delete?index=indices  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/history/delete?index=0 //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * index — position of configuration to be deleted, starting from 0. Multiple tickets can be specified as separated by commas.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
  * The request only works when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to connect as an administrator and to edit history synchronization configurations. Otherwise, the error code [8](retcodes_common.md "Common errors") is returned.
