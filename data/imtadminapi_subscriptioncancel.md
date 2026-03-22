# SubscriptionCancel (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Subscriptions ](imtadminapi_subscription.md "Subscriptions")/ SubscriptionCancel | [](imtadminapi_subscriptionjoinbatch.md "SubscriptionJoinBatch") [](imtadminapi_subscriptioncancelbatch.md "SubscriptionCancelBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionCancel
Cancel a subscription for a user.
C++
MTAPIRES IMTAdminAPI::SubscriptionCancel( const UINT64 login, // User const UINT64  subscription, // Subscription configuration ID IMTSubscription* record, // Subscription description IMTSubscriptionHistory* history // Description of a subscription action )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAdminAPI.SubscriptionCancel( ulong login, // User ulong subscription, // Subscription configuration ID CIMTSubscription  record, // Subscription description CIMTSubscriptionHistory history // Description of a subscription action )  
---  
Parameters
login
[in] [The login of the user](imtuser_login.md "Login"), for whom the subscription is canceled.
subscription
[in] [ID of subscription configuration](imtconsubscription_id.md "ID") to be canceled.
record
[out] [Description of the canceled subscription](imtsubscription.md "IMTSubscription").
history
[out] [Description of the action](imtsubscriptionhistory.md "IMTSubscriptionHistory") which was performed to cancel the subscription.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
When the method is called, it is checked whether unsubscription is allowed according to the [IMTConSubscription::ControlMode](imtconsubscription_controlmode.md "ControlMode") parameter.
When a subscription is canceled by this method, both handlers are called: [IMTSubscriptionSink::OnSubscriptionCancel](imtsubscriptionsink_onsubscriptioncancel.md "OnSubscriptionCancel") and [IMTSubscriptionSink::OnSubscriptionDelete](imtsubscriptionsink_onsubscriptiondelete.md "OnSubscriptionDelete").