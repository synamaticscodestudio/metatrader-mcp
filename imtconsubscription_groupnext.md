# GroupNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ GroupNext | [](imtconsubscription_grouptotal.md "GroupTotal") [](imtconsubscription_symboladd.md "SymbolAdd") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::GroupNext
Get a group, for which the subscription is available, by index.
C++
LPCWSTR IMTConSubscription::GroupNext( const UINT pos // Group position ) const  
---  
.NET (Gateway/Manager API)
string CIMTConSubscription.GroupNext( uint pos, // Group position )  
---  
Parameters
pos
[in] Group position in the list.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.