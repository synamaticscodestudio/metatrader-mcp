# Get Module by Index (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Data Feeds ](webapi_feeder.md "Data Feeds")/ Get Module by Index | [](webapi_feeder_module_total.md "Get Total Modules") [](webapi_feeder_module_get.md "Get Module by Name") |
| --- | --- | --- |
| --- | --- |

Get Data Feed Module by Index
The request allows receiving a data feed module description by an index in the list.
Request Format
GET /api/feeder/module/next?index=index POST /api/feeder/module/next?index=index  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/feeder/module/next?index=0 //--- server response { "retcode" : "0 Done", "answer" : { "Name" : "MetaTrader 5 Feeder", "Module" : "MetaTrader5Feeder64.exe", "Server" : "access.metatrader5.com:443", "Login" : "1000", "Password" : "password", "Copyright" : "Copyright 2000-2021, MetaQuotes Software Corp.", "Description" : "The datafeed translates quotes and news from remote MetaTrader 5 server ", "Version" : "2380", "Modes" : "3", "Fields" : "15", "VersionApi" : "2361", "BuildDate" : "2 Apr 2020", "BuildApiDate" : "08 Mar 2020", "Params" : [ { "Type" : "0", "Name" : "Quotes Time Original", "Value" : "No" }, ... ] } }  
---  
Request Parameters
  * index — the index of the module in the list starting with 0.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned. If an index of a nonexistent module is requested, the response code [13](retcodes_common.md "Common errors") is returned.
  * answer — data feed module name in JSON format. The complete description of passed server parameters is available under the ["Data structure"](webapi_feeder_data_structure.htm#module) section.
