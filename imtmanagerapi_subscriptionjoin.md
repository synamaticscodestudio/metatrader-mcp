# SubscriptionJoin (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Subscriptions ](imtmanagerapi_subscription.md "Subscriptions")/ SubscriptionJoin | [](imtmanagerapi_subscriptioncreatearray.md "SubscriptionCreateArray") [](imtmanagerapi_subscriptionjoinbatch.md "SubscriptionJoinBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionJoin
Add a subscription for a user.
C++
MTAPIRES IMTManagerAPI::SubscriptionJoin( const UINT64 login, // User const UINT64  subscription, // Subscription configuration ID IMTSubscription* record, // Subscription description IMTSubscriptionHistory* history // Description of a subscription action )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTManagerAPI.SubscriptionJoin( ulong login, // User ulong subscription, // Subscription configuration ID CIMTSubscription  record, // Subscription description CIMTSubscriptionHistory history // Description of a subscription action )  
---  
Parameters
login
[in] [The login of the user](imtuser_login.md "Login"), for whom the subscription is added.
subscription
[in] [ID of subscription configuration](imtconsubscription_id.md "ID") to be added.
record
[out] [Description of the created subscription](imtsubscription.md "IMTSubscription").
history
[out] [Description of the action](imtsubscriptionhistory.md "IMTSubscriptionHistory") which was performed to create the subscription.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
When the method is called, it is checked whether subscription adding is allowed according to the [IMTConSubscription::ControlMode](imtconsubscription_controlmode.md "ControlMode") parameter. If necessary, the subscription cost is debited from the corresponding account. Thus, subscribing by this method is similar to how a trader subscribes.
When a subscription is added by this method, both handlers are called: [IMTSubscriptionSink::OnSubscriptionJoin](imtsubscriptionsink_onsubscriptionjoin.md "OnSubscriptionJoin") and [IMTSubscriptionSink::OnSubscriptionAdd](imtsubscriptionsink_onsubscriptionadd.md "OnSubscriptionAdd").