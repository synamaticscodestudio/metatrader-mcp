# SymbolUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ SymbolUpdate | [](imtconsubscription_symboladd.md "SymbolAdd") [](imtconsubscription_symboldelete.md "SymbolDelete") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::SymbolUpdate
Update a trading instrument in the list of symbols available by subscription.
C++
MTAPIRES IMTConSubscription::SymbolUpdate( const UINT pos, // Symbol position const IMTConSubscriptionSymbol* symbol // Symbol object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.SymbolUpdate( uint pos, // Symbol position CIMTConSubscriptionSymbol symbol // Symbol object )  
---  
Parameters
pos
[in] Position of a condition in the list, starting at 0.
symbol
[in] Symbol object [IMTConSubscriptionSymbol](imtconsubscriptionsymbol.md "IMTConSubscriptionSymbol").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.