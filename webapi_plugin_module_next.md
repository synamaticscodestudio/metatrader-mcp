# Get Module by Index (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Plugins ](webapi_plugin.md "Plugins")/ Get Module by Index | [](webapi_plugin_module_total.md "Get Total Modules") [](webapi_plugin_module_get.md "Get Module by Name") |
| --- | --- | --- |
| --- | --- |

Get Plugin Module by Index
The request allows receiving a report module description by an index in the list.
Request Format
GET /api/report/module/next?index=index POST /api/report/module/next?index=index  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/report/module/next?index=0 //--- server response { "retcode" : "0 Done", "answer" : { "Server" : "5", "Module" : "Trades.Transaction.Reports64.dll", "Version" : "100", "VersionApi" : "2361", "Name" : "Trade Transaction Report", "Copyright" : "Copyright 2000-2021, MetaQuotes Software Corp.", "Description" : "Plugin for collect information for Trades.Transaction.Reports", "Path" : "Trades.Transaction.Reports64.dll", "Params" : [ { "Type" : "6", "Name" : "Groups", "Value" : "*,!demo*,!contest*" } ] } }  
---  
Request Parameters
  * index — the index of the module in the list starting with 0.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned. If an index of a nonexistent module is requested, the response code [13](retcodes_common.md "Common errors") is returned.
  * answer — plugin module name in JSON format. The complete description of passed server parameters is available under the ["Data structure"](webapi_plugin_data_structure.htm#module) section.
