# SymbolAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ SymbolAdd | [](imtconsubscription_groupnext.md "GroupNext") [](imtconsubscription_symbolupdate.md "SymbolUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::SymbolAdd
Add a trading instrument to the list of symbols available by subscription.
C++
MTAPIRES IMTConSubscription::SymbolAdd( IMTConSubscriptionSymbol* symbol // Symbol object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.SymbolAdd( CIMTConSubscriptionSymbol symbol // Symbol object )  
---  
Parameters
symbol
[in] Symbol object [IMTConSubscriptionSymbol](imtconsubscriptionsymbol.md "IMTConSubscriptionSymbol").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.