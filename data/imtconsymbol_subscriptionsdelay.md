# SubscriptionsDelay (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ SubscriptionsDelay | [](imtconsymbol_filtergapticks.md "FilterGapTicks") [](imtconsymbol_trademode.md "TradeMode") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::SubscriptionsDelay
Get the delay for the quotes provided by [subscription](imtconsubscription.md "IMTConSubscription").
C++
UINT IMTConSymbol::SubscriptionsDelay() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.SubscriptionsDelay()  
---  
Python (Manager API)
MTConSymbol.SubscriptionsDelay  
---  
Return Value
Delay in minutes.
Note
For details please see the [MetaTrader 5 Administrator Help](https://support.metaquotes.net/en/docs/mt5/platform/administration/subscriptions/subscriptions_symbol#delayed).
IMTConSymbol::SubscriptionsDelay
Set the delay for the quotes provided by [subscription](imtconsubscription.md "IMTConSubscription").
C++
MTAPIRES IMTConSymbol::SubscriptionsDelay( const UINT delay // Delay )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.SubscriptionsDelay( uint delay // Delay )  
---  
Python (Manager API)
MTConSymbol.SubscriptionsDelay  
---  
Parameters
delay
[in] Delay in minutes.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
A restart of the access servers is required for new delay settings to take effect.
The delay does not affect data delivery for non-subscription instruments.
For details please see the [MetaTrader 5 Administrator Help](https://support.metaquotes.net/en/docs/mt5/platform/administration/subscriptions/subscriptions_symbol#delayed).