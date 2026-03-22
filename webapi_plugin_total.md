# Get Total (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Plugins ](webapi_plugin.md "Plugins")/ Get Total | [](webapi_plugin_shift.md "Shift") [](webapi_plugin_next.md "Get by Index") |
| --- | --- | --- |
| --- | --- |

Get Total Plugins
The request allows receiving the number of plugin configurations available in the platform.
Request Format
GET /api/plugin/total POST /api/plugin/total  
---  
Response Format
{ "retcode" : "code description", "answer" : { "Total" : "number" } }  
---  
Example
//--- request to the server GET /api/plugin/total //--- server response { "retcode" : "0 Done", "answer" : { "Total" : "11" } }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * total — number of plugin configurations in the trading platform.
