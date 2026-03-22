# Unsubscribe (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Subscriptions ](webapi_subscription.md "Subscriptions")/ Unsubscribe | [](webapi_subscription_join.md "Subscribe") [](webapi_subscription_add.md "Add to Database") |
| --- | --- | --- |
| --- | --- |

Unsubscribe a user from a service
The request allows canceling a user subscription.
Request Format
GET /api/subscription/cancel?login=login&subscription=subscription POST /api/subscription/cancel?login=login&subscription=subscription  
---  
Response Format
{ "retcode" : "0 Done", "answer" : { "subscription" : { subscription description }, "action" : { action description } } }  
---  
Example
//--- request to the server GET /api/subscription/cancel?login=1077&subscription=132240225329952639 //--- server response { "retcode": "0 Done", "answer": { "subscription": { "Id": "8", "Timestamp": "132576179398749593", "Login": "1077", "Subscription": "132240225329952639", "Status": "0", "Flags": "0", "TimeSubscribe": "1613147939", "TimeRenewal": "1613147939", "TimeExpire": "1615739939" }, "action": { "Id": "13", "Timestamp": "132576179398799588", "Login": "1077", "Subscription": "132240225329952639", "Record": "8", "TimeCreated": "1613147939", "Action": "3", "Flags": "0", "Amount": "0", "AmountDeal": "0" } } }  
---  
Request Parameters
  * login — [the login of the user](imtuser_login.md "Login") for whom the subscription is canceled.
  * subscription — [ID of subscription configuration](imtconsubscription_id.md "ID") to be canceled.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * subscription — description of the canceled subscription. The complete list of passed parameters is available under the ["Data structure"](webapi_subscription_data_structure.htm#subscription) section.
  * action — description of the action which was performed to cancel the subscription. The complete list of passed parameters is available under the ["Data structure"](webapi_subscription_data_structure.htm#history) section.

Note
  * During the request, it is checked if canceling a subscription is allowed in accordance with the [ControlMode](webapi_subscription_cfg_data_format.htm#subscription) parameter.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to edit subscriptions. Otherwise, error code [8](retcodes_common.md "Common errors") is returned.
  * When a subscription is canceled by this method, both handlers are called: [IMTSubscriptionSink::OnSubscriptionCancel](imtsubscriptionsink_onsubscriptioncancel.md "OnSubscriptionCancel") and [IMTSubscriptionSink::OnSubscriptionDelete](imtsubscriptionsink_onsubscriptiondelete.md "OnSubscriptionDelete").
