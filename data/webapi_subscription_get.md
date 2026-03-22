# Get Subscriptions (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Subscriptions ](webapi_subscription.md "Subscriptions")/ Get Subscriptions | [](webapi_subscription_delete.md "Delete from Database") [](webapi_subscription_exist.md "Check Subscription Existence") |
| --- | --- | --- |
| --- | --- |

Get user subscriptions
The request allows receiving a user's subscriptions.
Request Format
GET /api/subscription/get?id=identifier GET /api/subscription/get?login=login GET /api/subscription/get?login=login&subscription=subscription POST /api/subscription/get?id=identifier POST /api/subscription/get?login=login POST /api/subscription/get?login=login&subscription=subscription  
---  
Response Format
{ "retcode" : "0 Done", "answer" : [ one or more subscription descriptions ] }  
---  
Example
//--- request to the server GET /api/subscription/get?id=8 //--- server response { "retcode": "0 Done", "answer": { "Id": "8", "Timestamp": "132576179398749593", "Login": "1077", "Subscription": "132240225329952639", "Status": "0", "Flags": "0", "TimeSubscribe": "1613147939", "TimeRenewal": "1613147939", "TimeExpire": "1615739939" } }  
---  
Request Parameters
  * id — subscription identifier. The [ID](webapi_subscription_data_structure.htm#subscription) value is used for the identifier.
  * login — the login of the user whose subscriptions you are requesting. All the user's subscriptions will be returned when requested by login.
  * subscription — the identifier of the subscription configuration ([ID](webapi_subscription_cfg_data_format.htm#subscription)) to be received. This parameter can only be used in combination with 'login' parameter to get the user's subscription to a specific service.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to view subscriptions. Otherwise, error code [8](retcodes_common.md "Common errors") is returned.