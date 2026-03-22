# Shift (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Subscriptions ](webapi_subscription_cfg.md "Subscriptions")/ Shift | [](webapi_subscription_cfg_delete.md "Delete") [](webapi_subscription_cfg_total.md "Get Total") |
| --- | --- | --- |
| --- | --- |

Shift a subscription configuration
The requests allows changing of the position of a subscription configuration in the list.
Request Format
GET /api/subscription/config/shift?index=index&shift=shift POST /api/subscription/config/shift?index=index&shift=shift  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/subscription/config/shift?index=0&shift=2 //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * index — position of configuration to be shifted, starting from 0. Multiple indices can be specified as separated by commas.
  * shift — shift of the configuration relative to its current position. A negative value means shifting towards the top of the list, a positive value means shifting towards its end.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
  * The request only works when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to connect as an administrator and to access the Subscriptions section. Otherwise, error code [8](retcodes_common.md "Common errors") is returned.
