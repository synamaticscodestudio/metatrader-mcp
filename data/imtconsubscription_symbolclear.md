# SymbolClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ SymbolClear | [](imtconsubscription_symboldelete.md "SymbolDelete") [](imtconsubscription_symbolshift.md "SymbolShift") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::SymbolClear
Clear the list of trading instruments available by subscription.
C++
MTAPIRES IMTConSubscription::SymbolClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.SymbolClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
This method deletes all symbols from the list of symbols available by subscription.