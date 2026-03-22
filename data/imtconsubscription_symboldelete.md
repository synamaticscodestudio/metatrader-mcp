# SymbolDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ SymbolDelete | [](imtconsubscription_symbolupdate.md "SymbolUpdate") [](imtconsubscription_symbolclear.md "SymbolClear") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::SymbolDelete
Delete a trading instrument from the list of symbols available by subscription.
C++
MTAPIRES IMTConSubscription::SymbolDelete( const UINT pos // Symbol position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.SymbolDelete( uint pos // symbol position )  
---  
Parameters
pos
[in] Position of the symbol in the list, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.