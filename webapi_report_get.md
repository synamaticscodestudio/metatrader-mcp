# Get by Name (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Reports ](webapi_report.md "Reports")/ Get by Name | [](webapi_report_next.md "Get by Index") [](webapi_report_get_all.md "Get All") |
| --- | --- | --- |
| --- | --- |

Get Report by Name
This request allows receiving a report configuration by its name.
Request Format
GET /api/report/get?server=identifier&name=name POST /api/report/get?server=identifier&name=name  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/report/get?server=1&name=Daily%20Trades //--- server response { "retcode" : "0 Done", "answer" : { "Name" : "Daily Trades", "Server" : "1", "Template" : "Daily Trades", "Enable" : "1", "Params" : [ { "Type" : "0", "Name" : "Currency", "Value" : "USD" } ] } }  
---  
Request Parameters
  * server — the identifier of the server for which the report configuration is requested.
  * name — report configuration name.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — description of the report configuration in JSON format. The complete description of passed server parameters is available under the ["Data structure"](webapi_report_data_structure.md "Data Structure") section.
