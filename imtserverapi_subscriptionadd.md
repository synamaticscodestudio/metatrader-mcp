# SubscriptionAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Subscriptions ](serverapi_subscription.md "Subscriptions")/ SubscriptionAdd | [](imtserverapi_subscriptionexist.md "SubscriptionExist") [](imtserverapi_subscriptionupdate.md "SubscriptionUpdate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionAdd
Add a user subscription to the server database.
MTAPIRES IMTServerAPI::SubscriptionAdd( IMTSubscription* record // Subscription description )  
---  
Parameters
record
[in] [Subscription description](imtsubscription.md "IMTSubscription"). The key field for finding an exiting record is [IMTSubscription::ID](imtsubscription_id.md "ID").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned. For example, if the specified subscription does not exist, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
Note
When the method is called, it is NOT checked whether subscription change is allowed according to the [IMTConSubscription::ControlMode](imtconsubscription_controlmode.md "ControlMode") parameter. Changes take place directly in the database. Also, in this case, the subscription cost is not debited from the trader's account.
When adding a subscription by this method, the [IMTSubscriptionSink::OnSubscriptionAdd](imtsubscriptionsink_onsubscriptionadd.md "OnSubscriptionAdd") handler is called, while the [IMTSubscriptionSink::OnSubscriptionJoin](imtsubscriptionsink_onsubscriptionjoin.md "OnSubscriptionJoin") handler is not called.