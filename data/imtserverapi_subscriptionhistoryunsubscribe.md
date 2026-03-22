# SubscriptionHistoryUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Subscriptions ](serverapi_subscription.md "Subscriptions")/ SubscriptionHistoryUnsubscribe | [](imtserverapi_subscriptionhistorysubscribe.md "SubscriptionHistorySubscribe") [](imtserverapi_subscriptionhistoryadd.md "SubscriptionHistoryAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionHistoryUnsubscribe
Unsubscribe from events and hooks associated with changes in the database of subscription actions.
MTAPIRES IMTServerAPI::SubscriptionHistoryUnsubscribe( IMTSubscriptionHistorySink* sink // A pointer to the IMTSubscriptionHistorySink object )  
---  
Parameters
sink
[in] A pointer to the object implementing the [IMTSubscriptionHistorySink](imtsubscriptionhistorysink.md "IMTSubscriptionHistorySink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::SubscriptionHistorySubscribe](imtserverapi_subscriptionhistorysubscribe.md "SubscriptionHistorySubscribe"). If an attempt is made to unsubscribe from the interface that has not been previously subscribed to, the [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.