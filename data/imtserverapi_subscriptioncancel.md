# SubscriptionCancel (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Subscriptions ](serverapi_subscription.md "Subscriptions")/ SubscriptionCancel | [](imtserverapi_subscriptionjoin.md "SubscriptionJoin") [](imtserverapi_subscriptionexist.md "SubscriptionExist") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionCancel
Cancel a subscription for a user.
MTAPIRES IMTServerAPI::SubscriptionCancel( const UINT64 login, // User const UINT64  subscription, // Subscription configuration ID IMTSubscription* record, // Subscription description IMTSubscriptionHistory* history // Description of a subscription action )  
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