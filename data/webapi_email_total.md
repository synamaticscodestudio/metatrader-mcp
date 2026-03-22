# Get Total (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Email ](webapi_email.md "Email")/ Get Total | [](webapi_email_shift.md "Shift") [](webapi_email_next.md "Get by Index") |
| --- | --- | --- |
| --- | --- |

Get Number of Mail Servers
The request allows receiving the number of mail server configurations available in the platform.
Request Format
GET /api/email/total POST /api/email/total  
---  
Response Format
{ "retcode" : "code description", "answer" : { "Total" : "number" } }  
---  
Example
//--- request to the server GET /api/email/total //--- server response { "retcode" : "0 Done", "answer" : { "Total" : "11" } }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * total — the number of mail server configurations in the trading platform.
