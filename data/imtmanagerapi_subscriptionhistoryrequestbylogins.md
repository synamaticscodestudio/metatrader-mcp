# SubscriptionHistoryRequestByLogins (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Subscriptions ](imtmanagerapi_subscription.md "Subscriptions")/ SubscriptionHistoryRequestByLogins | [](imtmanagerapi_subscriptionhistoryrequestbygroup.md "SubscriptionHistoryRequestByGroup") [](imtmanagerapi_custom.md "Custom Functions") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionHistoryRequestByLogins
Request subscription actions from the server by a list of logins.
C++
MTAPIRES IMTManagerAPI::SubscriptionHistoryRequestByLogins( const UINT64* logins, // Logins const UINT logins_total, // Number of logins const INT64 from, // Period start const INT64 to, // Period end IMTSubscriptionHistoryArray* records // Action array object )  
---  
.NET
MTRetCode CIMTManagerAPI.SubscriptionHistoryRequestByLogins( ulong[] logins, // Logins long from, // Period start long to, // Period end CIMTSubscriptionHistoryArray records // Action array object )  
---  
Parameters
logins
[in] Array of client logins.
logins_total
[in] Number of logins in the 'logins' array.
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