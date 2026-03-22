# Get by Name (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Plugins ](webapi_plugin.md "Plugins")/ Get by Name | [](webapi_plugin_next.md "Get by Index") [](webapi_plugin_get_all.md "Get All") |
| --- | --- | --- |
| --- | --- |

Get Plugin by Name
This request allows receiving a plugin configuration by its name.
Request Format
GET /api/plugin/get?server=identifier&name=name POST /api/plugin/get?server=identifier&name=name  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/plugin/get?server=1&name=Trade%20Transaction%20Report //--- server response { "retcode" : "0 Done", "answer" : { "Name" : "Trade Transaction Report", "Server" : "5", "Module" : "Trades.Transaction.Reports64.dll", "Enable" : "1", "Flags" : "0", "Params" : [ { "Type" : "6", "Name" : "Groups", "Value" : "*" } ] } }  
---  
Request Parameters
  * server — the identifier of the server for which the plugin configuration is requested.
  * name — plugin configuration name.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — description of the plugin configuration in JSON format. The complete description of passed server parameters is available under the ["Data structure"](webapi_plugin_data_structure.md "Data Structure") section.
