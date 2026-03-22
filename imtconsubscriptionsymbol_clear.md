# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscriptionSymbol ](imtconsubscriptionsymbol.md "IMTConSubscriptionSymbol")/ Clear | [](imtconsubscriptionsymbol_assign.md "Assign") [](imtconsubscriptionsymbol_symbol.md "Symbol") |
| --- | --- | --- |
| --- | --- |

IMTConSubscriptionSymbol::Clear
Clear an object.
C++
MTAPIRES IMTConSubscriptionSymbol::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscriptionSymbol.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
This method clears all fields ​​and removes embedded objects.