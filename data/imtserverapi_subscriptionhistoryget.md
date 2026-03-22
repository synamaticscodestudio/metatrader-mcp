# SubscriptionHistoryGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Subscriptions ](serverapi_subscription.md "Subscriptions")/ SubscriptionHistoryGet | [](imtserverapi_subscriptionhistorydelete.md "SubscriptionHistoryDelete") [](imtserverapi_subscriptionhistorygetbyid.md "SubscriptionHistoryGetByID") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionHistoryGet
Get user subscription action from the server for the specified date range.
MTAPIRES IMTServerAPI::SubscriptionHistoryGet( const UINT64 login, // Login const INT64 from, // Period start const INT64 to, // Period end IMTSubscriptionHistoryArray* records // Array of actions )  
---  
Parameters
login
[in] The login of the user whose actions you want to obtain.
from
[in] The beginning of the period for which you need to get actions. The date is specified in seconds since 01.01.1970.
to
[in] The end of the period for which you need to get actions. The date is specified in seconds since 01.01.1970.
records
[out] Object of an [array of subscription actions](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray"). The 'records' object must be pre-created by the [IMTServerAPI::SubscriptionHistoryCreateArray](imtserverapi_subscriptionhistorycreatearray.md "SubscriptionHistoryCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.