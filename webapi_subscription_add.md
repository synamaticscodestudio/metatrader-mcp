# Add to Database (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Subscriptions ](webapi_subscription.md "Subscriptions")/ Add to Database | [](webapi_subscription_cancel.md "Unsubscribe") [](webapi_subscription_update.md "Update in Database") |
| --- | --- | --- |
| --- | --- |

Add a subscription to the server database
The request allows adding a user subscription directly to the server database.
Request Format
POST /api/subscription/add [ Array of subscription descriptions in JSON format ]  
---  
Response Format
{ "retcode" : "0 Done", "answer" : [ response codes for each subscription ] }  
---  
Example
//--- request to the server POST /api/subscription/add [ { "Timestamp": "446824746", "Login": "1000", "Subscription": "330629627", "Status": "0", "Flags": "0", "TimeSubscribe": "1612778109", "TimeRenewal": "1612778109", "TimeExpire": "1615370109" }, { "Timestamp": "446824746", "Login": "1000", "Subscription": "330629627", "Status": "0", "Flags": "0", "TimeSubscribe": "1612778109", "TimeRenewal": "1612778109", "TimeExpire": "1615370109", } ] //--- server response { "retcode": "0 Done", "answer": [ 0, 17 ] }  
---  
Request Parameters
The request has no parameters. Descriptions of subscriptions is passed in JSON format, as an additional body. The complete description of the possible parameters is provided in the ["Data structure"](webapi_subscription_data_structure.htm#subscription) section.
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — array of response codes regarding the addition of each subscription.

Note
  * During the request, it is NOT checked if adding a subscription is allowed in accordance with the [ControlMode](webapi_subscription_cfg_data_format.htm#subscription) parameter. Changes take place directly in the database. Also, in this case, the subscription cost is not debited from the trader's account.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to edit subscriptions. Otherwise, error code [8](retcodes_common.md "Common errors") is returned.
  * When adding a subscription by this method, the [IMTSubscriptionSink::OnSubscriptionAdd](imtsubscriptionsink_onsubscriptionadd.md "OnSubscriptionAdd") handler is called, while the [IMTSubscriptionSink::OnSubscriptionJoin](imtsubscriptionsink_onsubscriptionjoin.md "OnSubscriptionJoin") handler is not called.
