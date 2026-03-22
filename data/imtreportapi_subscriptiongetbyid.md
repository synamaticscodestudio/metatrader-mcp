# SubscriptionGetByID (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Subscriptions ](imtreportapi_subscription.md "Subscriptions")/ SubscriptionGetByID | [](imtreportapi_subscriptiongetbysubscription.md "SubscriptionGetBySubscription") [](imtreportapi_subscriptiongetbylogins.md "SubscriptionGetByLogins") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::SubscriptionGetByID
Get a subscription by ID.
MTAPIRES IMTReportAPI::SubscriptionGetByID( const UINT64 id, // ID IMTSubscription* record // Subscription object )  
---  
Parameters
id
[in] Subscription ID. The [IMTSubscription::ID](imtsubscription_id.md "ID") value is used as the identifier.
record
[out] [Subscription](imtsubscription.md "IMTSubscription") object. The 'record' object must be previously created via the [IMTReportAPI::SubscriptionCreate](imtreportapi_subscriptioncreate.md "SubscriptionCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.