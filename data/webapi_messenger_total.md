# Get Total (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Messengers ](webapi_messenger.md "Messengers")/ Get Total | [](webapi_messenger_shift.md "Shift") [](webapi_messenger_next.md "Get by Index") |
| --- | --- | --- |
| --- | --- |

Get the Number of Messengers
The request allows receiving the number of messenger configurations available in the platform.
Request Format
GET /api/messenger/total POST /api/messenger/total  
---  
Response Format
{ "retcode" : "code description", "answer" : { "Total" : "number" } }  
---  
Example
//--- request to the server GET /api/messenger/total //--- server response { "retcode" : "0 Done", "answer" : { "Total" : "11" } }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * total — the number of messenger configurations in the trading platform.
