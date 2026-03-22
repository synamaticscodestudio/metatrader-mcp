# SubscriptionHistoryRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Subscriptions ](imtmanagerapi_subscription.md "Subscriptions")/ SubscriptionHistoryRequest | [](imtmanagerapi_subscriptionhistorydeletebatch.md "SubscriptionHistoryDeleteBatch") [](imtmanagerapi_subscriptionhistoryrequestbyid.md "SubscriptionHistoryRequestByID") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionHistoryRequest
Request user subscription action from the server for the specified date range.
C++
MTAPIRES IMTManagerAPI::SubscriptionHistoryRequest( const UINT64 login, // Login const INT64 from, // Period start const INT64 to, // Period end IMTSubscriptionHistoryArray* records // Array of actions )  
---  
.NET
MTRetCode CIMTManagerAPI.SubscriptionHistoryRequest( ulong login, // Login long from, // Period start long to, // Period end CIMTSubscriptionHistoryArray records // Array of actions )  
---  
Parameters
login
[in] The login of the user whose actions you want to obtain.
from
[in] The beginning of the period for which you need to get actions. The date is specified in seconds since 01.01.1970.
to
[in] The end of the period for which you need to get actions. The date is specified in seconds since 01.01.1970.
records
[out] Object of an [array of subscription actions](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray"). The 'records' object must be pre-created by the [IMTManagerAPI::SubscriptionHistoryCreateArray](imtmanagerapi_subscriptionhistorycreatearray.md "SubscriptionHistoryCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).