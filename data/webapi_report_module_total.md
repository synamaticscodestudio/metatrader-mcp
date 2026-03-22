# Get Total Modules (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Reports ](webapi_report.md "Reports")/ Get Total Modules | [](webapi_report_get_all.md "Get All") [](webapi_report_module_next.md "Get Module by Index") |
| --- | --- | --- |
| --- | --- |

Get Total Report Modules
The request allows receiving the number of report modules available in the platform.
Request Format
GET /api/report/module/total POST /api/report/module/total  
---  
Response Format
{ "retcode" : "code description", "answer" : { "Total" : "number" } }  
---  
Example
//--- request to the server GET /api/report/module/total //--- server response { "retcode" : "0 Done", "answer" : { "Total" : "11" } }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * total — number of report modules in the trading platform.
