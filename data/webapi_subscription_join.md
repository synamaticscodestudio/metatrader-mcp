# Subscribe (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Subscriptions ](webapi_subscription.md "Subscriptions")/ Subscribe | [](webapi_subscription_data_structure.md "Data Structure") [](webapi_subscription_cancel.md "Unsubscribe") |
| --- | --- | --- |
| --- | --- |

Subscribe a user to a service
The request allows adding a user subscription.
Request Format
GET /api/subscription/join?login=login&subscription=subscription POST /api/subscription/join?login=login&subscription=subscription  
---  
Response Format
{ "retcode" : "0 Done", "answer" : { "subscription" : { subscription description }, "action" : { action description } } }  
---  
Example
//--- request to the server GET /api/subscription/join?login=1077&subscription=132240225329952639 //--- server response { "retcode": "0 Done", "answer": { "subscription": { "Id": "8", "Timestamp": "132576179398749593", "Login": "1077", "Subscription": "132240225329952639", "Status": "0", "Flags": "0", "TimeSubscribe": "1613147939", "TimeRenewal": "1613147939", "TimeExpire": "1615739939" }, "action": { "Id": "13", "Timestamp": "132576179398799588", "Login": "1077", "Subscription": "132240225329952639", "Record": "8", "TimeCreated": "1613147939", "Action": "0", "Flags": "0", "Amount": "-3.50", "AmountDeal": "6745798" } } }  
---  
Request Parameters
  * login — the login of the user for whom the subscription is being added.
  * subscription — the identifier ([ID](webapi_subscription_cfg_data_format.htm#subscription)) of the subscription configuration to be added.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * subscription — description of the created subscription. The complete list of passed parameters is available under the ["Data structure"](webapi_subscription_data_structure.htm#subscription) section.
  * action — description of the action which was performed to create the subscription. The complete list of passed parameters is available under the ["Data structure"](webapi_subscription_data_structure.htm#history) section.

Note
  * During the request, it is checked whether adding a subscription is allowed in accordance with the [ControlMode](webapi_subscription_cfg_data_format.htm#subscription) parameter. If necessary, the subscription cost is debited from the corresponding account. Thus, subscribing by this method is similar to how a trader subscribes.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to edit subscriptions. Otherwise, error code [8](retcodes_common.md "Common errors") is returned.
  * When a subscription is added by this method, both handlers are called: [IMTSubscriptionSink::OnSubscriptionJoin](imtsubscriptionsink_onsubscriptionjoin.md "OnSubscriptionJoin") and [IMTSubscriptionSink::OnSubscriptionAdd](imtsubscriptionsink_onsubscriptionadd.md "OnSubscriptionAdd").
