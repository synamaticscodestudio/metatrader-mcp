# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ Assign | [](imtconsubscription_release.md "Release") [](imtconsubscription_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConSubscription::Assign( const IMTConSubscription* iface // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.Assign( CIMTConSubscription iface // Source object )  
---  
Parameters
iface
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.