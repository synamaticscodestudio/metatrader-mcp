# Get Total Modules (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Plugins ](webapi_plugin.md "Plugins")/ Get Total Modules | [](webapi_plugin_get_all.md "Get All") [](webapi_plugin_module_next.md "Get Module by Index") |
| --- | --- | --- |
| --- | --- |

Get Total Plugin Modules
The request allows receiving the number of plugin modules available in the platform.
Request Format
GET /api/plugin/module/total POST /api/plugin/module/total  
---  
Response Format
{ "retcode" : "code description", "answer" : { "Total" : "number" } }  
---  
Example
//--- request to the server GET /api/plugin/module/total //--- server response { "retcode" : "0 Done", "answer" : { "Total" : "11" } }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * total — number of plugin modules in the trading platform.
