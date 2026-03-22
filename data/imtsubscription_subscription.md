# Subscription (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscription ](imtsubscription.md "IMTSubscription")/ Subscription | [](imtsubscription_login.md "Login") [](imtsubscription_status.md "Status") |
| --- | --- | --- |
| --- | --- |

IMTSubscription::Subscription
Get the subscription configuration identifier.
C++
UINT64 IMTSubscription::Subscription() const  
---  
.NET (Gateway/Manager API)
ulong CIMTSubscription.Subscription()  
---  
Return Value
Subscription configuration identifier ([IMTConSubscription::ID](imtconsubscription_id.md "ID")).
Note
This property identifies the service the client is subscribed to.
IMTSubscription::Subscription
Set the subscription configuration identifier.
C++
MTAPIRES IMTSubscription::Subscription( const UINT64 subscription_id // ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscription.Subscription( ulong subscription_id // ID )  
---  
Parameters
subscription_id
[in] Subscription configuration identifier ([IMTConSubscription::ID](imtconsubscription_id.md "ID")).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
This property identifies the service the client is subscribed to.