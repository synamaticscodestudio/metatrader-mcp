# SubscriptionHistoryRequestByIDs (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Subscriptions ](imtadminapi_subscription.md "Subscriptions")/ SubscriptionHistoryRequestByIDs | [](imtadminapi_subscriptionhistoryrequestbyid.md "SubscriptionHistoryRequestByID") [](imtadminapi_subscriptionhistoryrequestbygroup.md "SubscriptionHistoryRequestByGroup") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionHistoryRequestByIDs
Request subscription actions from the server by a list of identifiers.
C++
MTAPIRES IMTAdminAPI::SubscriptionHistoryRequestByIDs( const UINT64* ids, // IDs const UINT ids, // Number of IDs IMTSubscriptionHistoryArray* records // Object of the actions array )  
---  
.NET
MTRetCode CIMTAdminAPI.SubscriptionHistoryRequestByIDs( ulong[] ids, // IDs CIMTSubscriptionHistoryArray records // Object of an array of actions )  
---  
Parameters
ids
[in] Array of action identifiers. The [IMTSubscriptionHistory::ID](imtsubscriptionhistory_id.md "ID") value is used for the identifier.
ids_total
[in] The number of identifiers in the 'ids' array.
records
[out] Object of an [array of subscription actions](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray"). The 'records' object must be pre-created by the [IMTAdminAPI::SubscriptionHistoryCreateArray](imtadminapi_subscriptionhistorycreatearray.md "SubscriptionHistoryCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).