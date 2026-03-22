# SubscriptionUpdate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Subscriptions ](serverapi_subscription.md "Subscriptions")/ SubscriptionUpdate | [](imtserverapi_subscriptionadd.md "SubscriptionAdd") [](imtserverapi_subscriptiondelete.md "SubscriptionDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionUpdate
Edit a user subscription in the server database.
MTAPIRES IMTServerAPI::SubscriptionUpdate( IMTSubscription* record // Subscription description )  
---  
Parameters
record
[in] [Subscription description](imtsubscription.md "IMTSubscription"). The key field for finding an exiting record is [IMTSubscription::ID](imtsubscription_id.md "ID").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned. For example, if the specified subscription does not exist, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
Note
When the method is called, it is NOT checked whether subscription change is allowed according to the [IMTConSubscription::ControlMode](imtconsubscription_controlmode.md "ControlMode") parameter. Changes take place directly in the database.
A subscription can be updated only from the plugins that run on the same trade server where the subscription was created. For all other plugins, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
All required fields of subscriptions must be filled in, not only the ones that need to be changed. It is recommended that you first receive a subscription from the server, change the required fields, and then send it back to the server.