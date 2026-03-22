# Subscription (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistory ](imtsubscriptionhistory.md "IMTSubscriptionHistory")/ Subscription | [](imtsubscriptionhistory_login.md "Login") [](imtsubscriptionhistory_record.md "Subscription") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistory::Subscription
Get the subscription configuration identifier.
C++
UINT64 IMTSubscriptionHistory::Subscription() const  
---  
.NET (Gateway/Manager API)
ulong CIMTSubscriptionHistory.Subscription()  
---  
Return Value
Subscription configuration identifier ([IMTConSubscription::ID](imtconsubscription_id.md "ID")).
Note
This property identifies the service the client is subscribed to.
IMTSubscriptionHistory::Subscription
Set the subscription configuration identifier.
C++
MTAPIRES IMTSubscriptionHistory::Subscription( const UINT64 subscription_id // ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionHistory.Subscription( ulong subscription_id // ID )  
---  
Parameters
subscription_id
[in] Subscription configuration identifier ([IMTConSubscription::ID](imtconsubscription_id.md "ID")).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
This property identifies the service the client is subscribed to.