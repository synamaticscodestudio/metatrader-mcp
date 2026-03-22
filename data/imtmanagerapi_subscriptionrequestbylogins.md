# SubscriptionRequestByLogins (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Subscriptions ](imtmanagerapi_subscription.md "Subscriptions")/ SubscriptionRequestByLogins | [](imtmanagerapi_subscriptionrequestbygroup.md "SubscriptionRequestByGroup") [](imtmanagerapi_subscriptionhistorycreate.md "SubscriptionHistoryCreate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionRequestByLogins
Request subscriptions from the server by a list of logins.
C++
MTAPIRES IMTManagerAPI::SubscriptionRequestByLogins( const UINT64* logins, // Logins const UINT logins_total, // Number of logins IMTSubscriptionArray* records // Object of array of subscriptions )  
---  
.NET
MTRetCode CIMTManagerAPI.SubscriptionRequestByLogins( ulong[] logins, // Logins CIMTSubscriptionArray records // Object of array of subscriptions )  
---  
Parameters
logins
[in] Array of client logins.
logins_total
[in] Number of logins in the 'logins' array.
records
[out] An object of the [array of subscriptions](imtsubscriptionarray.md "IMTSubscriptionArray"). The 'records' object must be previously created via the [IMTManagerAPI::SubscriptionCreateArray](imtmanagerapi_subscriptioncreatearray.md "SubscriptionCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).