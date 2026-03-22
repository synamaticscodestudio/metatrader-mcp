# Check Subscription Existence (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Subscriptions ](webapi_subscription.md "Subscriptions")/ Check Existence | [](webapi_subscription_get.md "Get Subscriptions") [](webapi_subscription_history_add.md "Add to History") |
| --- | --- | --- |
| --- | --- |

Checking if a user subscription exists
The request allows checking if the user has a subscription to the specified service.
Request Format
GET /api/subscription/exist?login=login&subscription=subscription POST /api/subscription/exist?login=login&subscription=subscription  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/subscription/exist?login=1001&subscription=132240225329952639 //--- server response { "retcode": "13 Not found" }  
---  
Request Parameters
  * logi — the login of the user whose subscriptions you want to check.
  * subscription — the identifier of the subscription configuration ([ID](webapi_subscription_cfg_data_format.htm#subscription)) to be checked.

Response Parameters
  * retcode — if the subscription exists, the command returns [response code](retcodes_successful.md "Successful completion") 0\. If the subscription is not found, code [13](retcodes_common.md "Common errors") is returned.

Note
To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to view subscriptions. Otherwise, error code [8](retcodes_common.md "Common errors") is returned.