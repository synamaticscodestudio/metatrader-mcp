# SubscriptionRequestByIDs (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Subscriptions ](imtmanagerapi_subscription.md "Subscriptions")/ SubscriptionRequestByIDs | [](imtmanagerapi_subscriptionrequestbyid.md "SubscriptionRequestByID") [](imtmanagerapi_subscriptionrequestbygroup.md "SubscriptionRequestByGroup") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionRequestByIDs
Request subscriptions from the server by a list of IDs.
C++
MTAPIRES IMTManagerAPI::SubscriptionRequestByIDs( const UINT64* ids, // IDs const UINT ids, // Number of IDs IMTSubscriptionArray* records // Object of array of subscriptions )  
---  
.NET
MTRetCode CIMTManagerAPI.SubscriptionRequestByIDs( ulong[] ids, // IDs CIMTSubscriptionArray records // Object of array of subscriptions )  
---  
Parameters
ids
[in] Array of subscription identifiers. The [IMTSubscription::ID](imtsubscription_id.md "ID") value is used as the identifier.
ids_total
[in] The number of identifiers in the 'ids' array.
records
[out] An object of the [array of subscriptions](imtsubscriptionarray.md "IMTSubscriptionArray"). The 'records' object must be previously created via the [IMTManagerAPI::SubscriptionCreateArray](imtmanagerapi_subscriptioncreatearray.md "SubscriptionCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).