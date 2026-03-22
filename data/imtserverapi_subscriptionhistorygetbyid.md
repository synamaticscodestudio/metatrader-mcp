# SubscriptionHistoryGetByID (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Subscriptions ](serverapi_subscription.md "Subscriptions")/ SubscriptionHistoryGetByID | [](imtserverapi_subscriptionhistoryget.md "SubscriptionHistoryGet") [](imtserverapi_subscriptionhistorygetbylogins.md "SubscriptionHistoryGetByLogins") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionHistoryGetByID
Get a subscription action by ID.
MTAPIRES IMTServerAPI::SubscriptionHistoryGetByID( const UINT64 id, // Identifier IMTSubscriptionHistory* record // Action object )  
---  
Parameters
id
[in] Subscription action identifier. The [IMTSubscriptionHistory::ID](imtsubscriptionhistory_id.md "ID") value is used for the identifier.
record
[out] [Subscription action](imtsubscriptionhistory.md "IMTSubscriptionHistory") object. The 'record' object must be previously created via the [IMTServerAPI::SubscriptionHistoryCreate](imtserverapi_subscriptionhistorycreate.md "SubscriptionHistoryCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).