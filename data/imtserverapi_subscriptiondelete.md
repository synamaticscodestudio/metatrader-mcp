# SubscriptionDelete (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Subscriptions ](serverapi_subscription.md "Subscriptions")/ SubscriptionDelete | [](imtserverapi_subscriptionupdate.md "SubscriptionUpdate") [](imtserverapi_subscriptionget.md "SubscriptionGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionDelete
Delete a user subscription from the server database.
MTAPIRES IMTServerAPI::SubscriptionDelete( const UINT64 id // Subscription ID )  
---  
Parameters
id
[in] Subscription ID. The [IMTSubscription::ID](imtsubscription_id.md "ID") value is used as the identifier.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned. For example, if the specified subscription does not exist, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
Note
When the method is called, it is NOT checked whether subscription change is allowed according to the [IMTConSubscription::ControlMode](imtconsubscription_controlmode.md "ControlMode") parameter. Changes take place directly in the database.
A subscription can be deleted only from the plugins that run on the same trade server where the subscription was created. For all other plugins, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
When deleting a subscription by this method, the [IMTSubscriptionSink::OnSubscriptionDelete](imtsubscriptionsink_onsubscriptiondelete.md "OnSubscriptionDelete") handler is called, while the [IMTSubscriptionSink::OnSubscriptionCancel](imtsubscriptionsink_onsubscriptioncancel.md "OnSubscriptionCancel") handler is not called.