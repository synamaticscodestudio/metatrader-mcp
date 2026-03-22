# Get Module by Name (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Reports ](webapi_report.md "Reports")/ Get Module by Name | [](webapi_report_module_next.md "Get Module by Index") [](webapi_plugin.md "Plugins") |
| --- | --- | --- |
| --- | --- |

Get Report Module by Name
This request allows receiving a report module description by its name.
Request Format
GET /api/report/module/get?server=identifier&name=name POST /api/report/module/get?server=identifier&name=name  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/report/module/get?server=1&name=Credit%20Facility //--- server response { "retcode" : "0 Done", "answer" : { "Server" : "1", "Name" : "Credit Facility", "Filename" : "Trades.Standard.Reports64.dll", "Copyright" : "Copyright 2000-2021, MetaQuotes Software Corp.", "Description" : "MetaTrader 5 Report API plug-in", "Version" : "100", "VersionApi" : "2361", "VersionIe" : "0", "Timeout" : "0", "Types" : "2", "Snapshots" : "0", "Path" : "Trades.Standard.Reports64.dll", "Category" : "Trades", "ParamsConfig" : [], "ParamsRequest" : [ { "Type" : "6", "Name" : "Groups", "Value" : "*" } ] } }  
---  
Request Parameters
  * name — data feed module name.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — report module name in JSON format. The complete description of passed server parameters is available under the ["Data structure"](webapi_report_data_structure.htm#module) section.
