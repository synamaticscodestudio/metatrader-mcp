# Get All (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Plugins ](webapi_plugin.md "Plugins")/ Get All | [](webapi_plugin_get.md "Get by Name") [](webapi_plugin_module_total.md "Get Total Modules") |
| --- | --- | --- |
| --- | --- |

Get All Plugins
Get all existing plugin configurations.
Request Format
GET /api/plugin/get_all POST /api/plugin/get_all  
---  
Response Format
{ "retcode" : "code description", "answer" : [ { description }, { description }, { description }, ... ] }  
---  
Example
//--- request to the server GET /api/plugin/get_all //--- server response { "retcode" : "0 Done", "answer" : [ { "Name" : "Trade Transaction Report", "Server" : "5", "Module" : "Trades.Transaction.Reports64.dll", "Enable" : "1", "Flags" : "0", "Params" : [ { "Type" : "6", "Name" : "Groups", "Value" : "*" } ] }, { "Name" : "API Extension", "Server" : "1", "Module" : "APIExtension64.dll", "Enable" : "1", "Flags" : "0", "Params" : [] } ] }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — an array with descriptions of plugin configurations in JSON format. The complete description of the transmitted server parameters is provided under the ["Data Structure"](webapi_plugin_data_structure.md "Data Structure") section.
