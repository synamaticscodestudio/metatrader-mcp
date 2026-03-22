# Shift (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Holidays ](webapi_holiday.md "Holidays")/ Shift | [](webapi_holiday_delete.md "Delete") [](webapi_holiday_total.md "Get Total") |
| --- | --- | --- |
| --- | --- |

Shift Holiday
The requests allows changing the position of a holiday configuration in the list.
Request Format
GET /api/holiday/shift?index=index&shift=shift POST /api/holiday/shift?index=index&shift=shift  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/holiday/shift?index=0&shift=2 //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * index — the position of the rule to be shifted, starting from 0. Multiple tickets can be specified as separated by commas.
  * shift — shift of a rule relative to its current position. A negative value means shifting towards the top of the list, a positive value means shifting towards its end.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
  * The request only works when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to connect as an administrator and to edit holiday configurations. Otherwise, the error code [8](retcodes_common.md "Common errors") is returned.
