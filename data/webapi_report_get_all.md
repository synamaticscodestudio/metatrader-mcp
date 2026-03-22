# Get All (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Reports ](webapi_report.md "Reports")/ Get All | [](webapi_report_get.md "Get by Name") [](webapi_report_module_total.md "Get Total Modules") |
| --- | --- | --- |
| --- | --- |

Get All Reports
Get all existing report configurations.
Request Format
GET /api/report/get_all POST /api/report/get_all  
---  
Response Format
{ "retcode" : "code description", "answer" : [ { description }, { description }, { description }, ... ] }  
---  
Example
//--- request to the server GET /api/report/get_all //--- server response { "retcode" : "0 Done", "answer" : [ { "Name" : "Daily Trades", "Server" : "1", "Template" : "Daily Trades", "Enable" : "1", "Params" : [ { "Type" : "0", "Name" : "Currency", "Value" : "USD" } ] }, { "Name" : "Accounts Groups", "Server" : "1", "Template" : "Accounts Groups", "Enable" : "1", "Params" : [] } ] }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — an array with descriptions of report configurations in JSON format. The complete description of the transmitted server parameters is provided under the ["Data Structure"](webapi_report_data_structure.md "Data Structure") section.
