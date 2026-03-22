# Delete (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Plugins ](webapi_plugin.md "Plugins")/ Delete | [](webapi_plugin_add.md "Add") [](webapi_plugin_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

Delete Plugin
The request allows deleting plugin configurations from the trading platform.
Request Format
GET /api/plugin/delete?server=identifier&name=names POST /api/plugin/delete?server=identifier&name=names  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/plugin/delete?server=1&name=Manager%20API%20Extension //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * server — the identifier of the server from which the plugin configuration should be deleted.
  * name — the name of the configuration to be deleted. Multiple indices can be specified as separated by commas.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
  * The request only works when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to connect as an administrator and to edit plugin configurations. Otherwise, the error code [8](retcodes_common.md "Common errors") is returned.
