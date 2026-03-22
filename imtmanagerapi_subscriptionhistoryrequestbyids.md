# SubscriptionHistoryRequestByIDs (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Subscriptions ](imtmanagerapi_subscription.md "Subscriptions")/ SubscriptionHistoryRequestByIDs | [](imtmanagerapi_subscriptionhistoryrequestbyid.md "SubscriptionHistoryRequestByID") [](imtmanagerapi_subscriptionhistoryrequestbygroup.md "SubscriptionHistoryRequestByGroup") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionHistoryRequestByIDs
Request subscription actions from the server by a list of identifiers.
C++
MTAPIRES IMTManagerAPI::SubscriptionHistoryRequestByIDs( const UINT64* ids, // IDs const UINT ids, // Number of IDs IMTSubscriptionHistoryArray* records // Object of the actions array )  
---  
.NET
MTRetCode CIMTManagerAPI.SubscriptionHistoryRequestByIDs( ulong[] ids, // IDs CIMTSubscriptionHistoryArray records // Object of an array of actions )  
---  
Parameters
ids
[in] Array of action identifiers. The [IMTSubscriptionHistory::ID](imtsubscriptionhistory_id.md "ID") value is used for the identifier.
ids_total
[in] The number of identifiers in the 'ids' array.
records
[out] Object of an [array of subscription actions](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray"). The 'records' object must be pre-created by the [IMTManagerAPI::SubscriptionHistoryCreateArray](imtmanagerapi_subscriptionhistorycreatearray.md "SubscriptionHistoryCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).