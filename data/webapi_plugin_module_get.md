# Get Module by Name (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Plugins ](webapi_plugin.md "Plugins")/ Get Module by Name | [](webapi_plugin_module_next.md "Get Module by Index") [](webapi_subscription_cfg.md "Subscriptions") |
| --- | --- | --- |
| --- | --- |

Get Plugin Module by Name
This request allows receiving a report module description by its name.
Request Format
GET /api/plugin/module/get?server=identifier&name=name POST /api/plugin/module/get?server=identifier&name=name  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/plugin/module/get?server=1&name=Trade%20Transaction%20Report //--- server response { "retcode" : "0 Done", "answer" : { "Server" : "5", "Module" : "Trades.Transaction.Reports64.dll", "Version" : "100", "VersionApi" : "2361", "Name" : "Trade Transaction Report", "Copyright" : "Copyright 2000-2021, MetaQuotes Software Corp.", "Description" : "Plugin for collect information for Trades.Transaction.Reports", "Path" : "Trades.Transaction.Reports64.dll", "Params" : [ { "Type" : "6", "Name" : "Groups", "Value" : "*,!demo*,!contest*" } ] } }  
---  
Request Parameters
  * name — data feed module name.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — plugin module name in JSON format. The complete description of passed server parameters is available under the ["Data structure"](webapi_plugin_data_structure.htm#module) section.
