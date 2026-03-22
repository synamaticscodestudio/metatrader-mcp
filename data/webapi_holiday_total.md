# Get Total (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Holidays ](webapi_holiday.md "Holidays")/ Get Total | [](webapi_holiday_shift.md "Shift") [](webapi_holiday_next.md "Get by Index") |
| --- | --- | --- |
| --- | --- |

Get the Number of Holidays
The request allows receiving the number of holiday configurations available in the platform.
Request Format
GET /api/holiday/total POST /api/holiday/total  
---  
Response Format
{ "retcode" : "code description", "answer" : { "Total" : "number" } }  
---  
Example
//--- request to the server GET /api/holiday/total //--- server response { "retcode" : "0 Done", "answer" : { "Total" : "11" } }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * total — the number of holiday configurations in the trading platform.
