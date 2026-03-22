# SubscriptionHistoryGetByID (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Subscriptions ](imtreportapi_subscription.md "Subscriptions")/ SubscriptionHistoryGetByID | [](imtreportapi_subscriptionhistoryget.md "SubscriptionHistoryGet") [](imtreportapi_subscriptionhistorygetbylogins.md "SubscriptionHistoryGetByLogins") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::SubscriptionHistoryGetByID
Get a subscription action by ID.
MTAPIRES IMTReportAPI::SubscriptionHistoryGetByID( const UINT64 id, // Identifier IMTSubscriptionHistory* record // Action object )  
---  
Parameters
id
[in] Subscription action identifier. The [IMTSubscriptionHistory::ID](imtsubscriptionhistory_id.md "ID") value is used for the identifier.
record
[out] [Subscription action](imtsubscriptionhistory.md "IMTSubscriptionHistory") object. The 'record' object must be previously created via the [IMTReportAPI::SubscriptionHistoryCreate](imtreportapi_subscriptionhistorycreate.md "SubscriptionHistoryCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).