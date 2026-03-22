# SubscriptionHistorySubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Subscriptions ](serverapi_subscription.md "Subscriptions")/ SubscriptionHistorySubscribe | [](imtserverapi_subscriptionhistorycreatearray.md "SubscriptionHistoryCreateArray") [](imtserverapi_subscriptionhistoryunsubscribe.md "SubscriptionHistoryUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionHistorySubscribe
Subscribe to events and hooks associated with changes in the database of subscription actions.
MTAPIRES IMTServerAPI::SubscriptionHistorySubscribe( IMTSubscriptionHistorySink* sink // A pointer to the IMTSubscriptionHistorySink object )  
---  
Parameters
sink
[in] A pointer to the object implementing the [IMTSubscriptionHistorySink](imtsubscriptionhistorysink.md "IMTSubscriptionHistorySink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. The same [IMTSubscriptionHistorySink](imtsubscriptionhistorysink.md "IMTSubscriptionHistorySink") interface cannot subscribe to an event twice. The [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") response code is returned in this case.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::SubscriptionHistoryUnsubscribe](imtserverapi_subscriptionhistoryunsubscribe.md "SubscriptionHistoryUnsubscribe") or until the plugin is deleted.