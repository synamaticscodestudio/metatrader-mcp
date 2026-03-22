# Delete (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Subscriptions ](webapi_subscription_cfg.md "Subscriptions")/ Delete | [](webapi_subscription_cfg_add.md "Add") [](webapi_subscription_cfg_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

Delete a subscription configuration
The request enables the deletion of subscription configurations in the platform.
Request Format
GET /api/subscription/config/delete?id=identifiers GET /api/subscription/config/delete?index=indices POST /api/subscription/config/delete?id=identifiers POST /api/subscription/config/delete?index=indices  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/subscription/config/delete?id=2 //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * id — the identifier of the subscription configuration to be deleted. Multiple indices can be specified as separated by commas.
  * index — position of configuration to be deleted, starting from 0. Multiple indices can be specified as separated by commas.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
  * Only one of the parameters can be specified in a request, i.e. id or index. Indication of two lists simultaneously is not allowed.
  * The request only works when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to connect as an administrator and to access the Subscriptions section. Otherwise, error code [8](retcodes_common.md "Common errors") is returned.
