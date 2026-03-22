# SubscriptionExist (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Subscriptions ](imtreportapi_subscription.md "Subscriptions")/ SubscriptionExist | [](imtreportapi_subscriptioncreatearray.md "SubscriptionCreateArray") [](imtreportapi_subscriptionget.md "SubscriptionGet") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::SubscriptionExist
Check if a user has the subscription.
bool IMTReportAPI::SubscriptionExist( const UINT64 login, // Login const UINT64 subscription // Subscription )  
---  
Parameters
login
[in] The login of the user whose subscriptions you want to obtain.
subscription
[in] Subscription configuration ID. The [IMTConSubscription::ID](imtconsubscription_id.md "ID") value is used for the identifier.
Return Value
Returns TRUE if the subscription exists, otherwise returns FALSE.