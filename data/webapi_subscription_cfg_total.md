# Get Total (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Subscriptions ](webapi_subscription_cfg.md "Subscriptions")/ Get Total | [](webapi_subscription_cfg_shift.md "Shift") [](webapi_subscription_cfg_next.md "Get by Index") |
| --- | --- | --- |
| --- | --- |

Get the number of subscription configurations
The request allows receiving the number of subscription configurations available in the platform.
Request Format
GET /api/subscription/config/total POST /api/subscription/config/total  
---  
Response Format
{ "retcode" : "code description", "answer" : { "Total" : "number" } }  
---  
Example
//--- request to the server GET /api/subscription/config/total //--- server response { "retcode" : "0 Done", "answer" : { "Total" : "11" } }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * total — the number of subscription configurations in the trading platform.
