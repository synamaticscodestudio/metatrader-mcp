# SubscriptionHistoryRequestByID (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Subscriptions ](imtadminapi_subscription.md "Subscriptions")/ SubscriptionHistoryRequestByID | [](imtadminapi_subscriptionhistoryrequest.md "SubscriptionHistoryRequest") [](imtadminapi_subscriptionhistoryrequestbyids.md "SubscriptionHistoryRequestByIDs") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionHistoryRequestByID
Request a subscription action from the server by its identifier.
C++
MTAPIRES IMTAdminAPI::SubscriptionHistoryRequestByID( const UINT64 id, // Identifier IMTSubscriptionHistory* record // Action object )  
---  
.NET
MTRetCode CIMTAdminAPI.SubscriptionHistoryRequestByID( ulong id, // Identifier CIMTSubscriptionHistory record // Action object )  
---  
Parameters
id
[in] Subscription action identifier. The [IMTSubscriptionHistory::ID](imtsubscriptionhistory_id.md "ID") value is used for the identifier.
record
[out] [Subscription action](imtsubscriptionhistory.md "IMTSubscriptionHistory") object. The 'record' object must be previously created via the [IMTAdminAPI::SubscriptionHistoryCreate](imtadminapi_subscriptionhistorycreate.md "SubscriptionHistoryCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).