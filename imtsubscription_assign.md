# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscription ](imtsubscription.md "IMTSubscription")/ Assign | [](imtsubscription_release.md "Release") [](imtsubscription_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTSubscription::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTSubscription::Assign( const IMTSubscription* obj // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscription.Assign( CIMTSubscription obj // Source object )  
---  
Parameters
obj
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.