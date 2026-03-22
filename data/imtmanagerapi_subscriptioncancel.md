# SubscriptionCancel (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Subscriptions ](imtmanagerapi_subscription.md "Subscriptions")/ SubscriptionCancel | [](imtmanagerapi_subscriptionjoinbatch.md "SubscriptionJoinBatch") [](imtmanagerapi_subscriptioncancelbatch.md "SubscriptionCancelBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionCancel
Cancel a subscription for a user.
C++
MTAPIRES IMTManagerAPI::SubscriptionCancel( const UINT64 login, // User const UINT64  subscription, // Subscription configuration ID IMTSubscription* record, // Subscription description IMTSubscriptionHistory* history // Description of a subscription action )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTManagerAPI.SubscriptionCancel( ulong login, // User ulong subscription, // Subscription configuration ID CIMTSubscription  record, // Subscription description CIMTSubscriptionHistory history // Description of a subscription action )  
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