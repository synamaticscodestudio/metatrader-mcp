# Delete from Database (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Subscriptions ](webapi_subscription.md "Subscriptions")/ Delete from Database | [](webapi_subscription_update.md "Update in Database") [](webapi_subscription_get.md "Get Subscriptions") |
| --- | --- | --- |
| --- | --- |

Delete a subscription from the server database
The request allows deleting a user subscription directly from the server database.
Request Format
GET /api/subscription/delete?id=identifier POST /api/subscription/delete?id=identifier  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/subscription/delete?id=12345 //--- server response { "retcode": "0 Done" }  
---  
Request Parameters
  * id — subscription identifier. The [ID](webapi_subscription_data_structure.htm#subscription) value is used for the identifier.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
  * During the request, it is NOT checked whether deleting a subscription is allowed in accordance with the [ControlMode](webapi_subscription_cfg_data_format.htm#subscription) parameter. Changes take place directly in the database.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to edit subscriptions. Otherwise, error code [8](retcodes_common.md "Common errors") is returned.
  * When deleting a subscription by this method, the [IMTSubscriptionSink::OnSubscriptionDelete](imtsubscriptionsink_onsubscriptiondelete.md "OnSubscriptionDelete") handler is called, while the [IMTSubscriptionSink::OnSubscriptionCancel](imtsubscriptionsink_onsubscriptioncancel.md "OnSubscriptionCancel") handler is not called.
