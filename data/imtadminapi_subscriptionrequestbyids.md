# SubscriptionRequestByIDs (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Subscriptions ](imtadminapi_subscription.md "Subscriptions")/ SubscriptionRequestByIDs | [](imtadminapi_subscriptionrequestbyid.md "SubscriptionRequestByID") [](imtadminapi_subscriptionrequestbygroup.md "SubscriptionRequestByGroup") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionRequestByIDs
Request subscriptions from the server by a list of IDs.
C++
MTAPIRES IMTAdminAPI::SubscriptionRequestByIDs( const UINT64* ids, // IDs const UINT ids, // Number of IDs IMTSubscriptionArray* records // Object of array of subscriptions )  
---  
.NET
MTRetCode CIMTAdminAPI.SubscriptionRequestByIDs( ulong[] ids, // IDs CIMTSubscriptionArray records // Object of array of subscriptions )  
---  
Parameters
ids
[in] Array of subscription identifiers. The [IMTSubscription::ID](imtsubscription_id.md "ID") value is used as the identifier.
ids_total
[in] The number of identifiers in the 'ids' array.
records
[out] An object of the [array of subscriptions](imtsubscriptionarray.md "IMTSubscriptionArray"). The 'records' object must be previously created via the [IMTAdminAPI::SubscriptionCreateArray](imtadminapi_subscriptioncreatearray.md "SubscriptionCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).