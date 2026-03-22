# SubscriptionUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Subscriptions ](serverapi_subscription.md "Subscriptions")/ SubscriptionUnsubscribe | [](imtserverapi_subscriptionsubscribe.md "SubscriptionSubscribe") [](imtserverapi_subscriptionjoin.md "SubscriptionJoin") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionUnsubscribe
Unsubscribe from events and hooks associated with changes in the subscriptions database.
MTAPIRES IMTServerAPI::SubscriptionUnsubscribe( IMTSubscriptionSink* sink // A pointer to the IMTSubscriptionSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTSubscriptionSink](imtsubscriptionsink.md "IMTSubscriptionHistorySink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::SubscriptionSubscribe](imtserverapi_subscriptionsubscribe.md "SubscriptionSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.