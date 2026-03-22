# SubscriptionSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Subscriptions ](serverapi_subscription.md "Subscriptions")/ SubscriptionSubscribe | [](imtserverapi_subscriptioncreatearray.md "SubscriptionCreateArray") [](imtserverapi_subscriptionunsubscribe.md "SubscriptionUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionSubscribe
Subscribe to events and hooks associated with changes in the subscriptions database.
MTAPIRES IMTServerAPI::SubscriptionSubscribe( IMTSubscriptionSink* sink // A pointer to the IMTSubscriptionSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTSubscriptionSink](imtsubscriptionsink.md "IMTSubscriptionHistorySink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
Subscribing to events is thread safe. The same [IMTSubscriptionSink](imtsubscriptionsink.md "IMTSubscriptionHistorySink") interface cannot subscribe to an event twice. The [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") response code is returned in this case.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::SubscriptionUnsubscribe](imtserverapi_subscriptionunsubscribe.md "SubscriptionUnsubscribe") or until the plugin is deleted.