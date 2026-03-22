# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscriptionSymbol ](imtconsubscriptionsymbol.md "IMTConSubscriptionSymbol")/ Assign | [](imtconsubscriptionsymbol_release.md "Release") [](imtconsubscriptionsymbol_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConSubscriptionSymbol::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConSubscriptionSymbol::Assign( const IMTConSubscriptionSymbol* symbol // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.Assign( CIMTConSubscriptionSymbol symbol // Source object )  
---  
Parameters
symbol
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.