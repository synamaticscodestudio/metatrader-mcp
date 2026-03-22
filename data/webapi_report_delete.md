# Delete (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Reports ](webapi_report.md "Reports")/ Delete | [](webapi_report_add.md "Add") [](webapi_report_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

Delete Report
The request allows deleting report configurations from the trading platform.
Request Format
GET /api/report/delete?server=identifier&name=names POST /api/report/delete?server=identifier&name=names  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/report/delete?server=1&name=Daily%20Trades //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * server — the identifier of the server from which the report configuration should be deleted.
  * name — the name of the configuration to be deleted. Multiple indices can be specified as separated by commas.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
  * The request only works when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to connect as an administrator and to edit report configurations. Otherwise, the error code [8](retcodes_common.md "Common errors") is returned.
