# SubscriptionRequestByID (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Subscriptions ](imtadminapi_subscription.md "Subscriptions")/ SubscriptionRequestByID | [](imtadminapi_subscriptionrequest.md "SubscriptionRequest") [](imtadminapi_subscriptionrequestbyids.md "SubscriptionRequestByIDs") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionRequestByID
Request a subscription from the server by ID.
C++
MTAPIRES IMTAdminAPI::SubscriptionRequestByID( const UINT64 id, // ID IMTSubscription* record // Subscription object )  
---  
.NET
MTRetCode CIMTAdminAPI.SubscriptionRequestByID( ulong id, // ID CIMTSubscription record // Subscription object )  
---  
Parameters
id
[in] Subscription ID. The [IMTSubscription::ID](imtsubscription_id.md "ID") value is used as the identifier.
record
[out] [Subscription](imtsubscription.md "IMTSubscription") object. The 'record' object must be previously created via the [IMTAdminAPI::SubscriptionCreate](imtadminapi_subscriptioncreate.md "SubscriptionCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).