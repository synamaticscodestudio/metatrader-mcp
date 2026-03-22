# TickHistory (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscriptionSymbol ](imtconsubscriptionsymbol.md "IMTConSubscriptionSymbol")/ TickHistory | [](imtconsubscriptionsymbol_level.md "Level") [](imtconsubscriptionnews.md "IMTConSubscriptionNews") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::TickHistory
Get the depth of tick data available by subscription.
C++
UINT64 IMTConAutomation::TickHistory() const  
---  
.NET (Gateway/Manager API)
EnFlags CIMTConAutomation.TickHistory()  
---  
Return Value
Depth of tick data as a value of the [IMTConSubscriptionSymbol::EnTickHistory](imtconsubscriptionsymbol_enum.htm#entickhistory) enumeration.
IMTConAutomation::TickHistory
Set the depth of tick data available by subscription.
C++
MTAPIRES IMTConAutomation::TickHistory( const UINT64 mode // Depth of tick data )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.TickHistory( EnFlags mode // Depth of tick data )  
---  
Parameters
flags
[in] Depth of tick data as a value of the [IMTConSubscriptionSymbol::EnTickHistory](imtconsubscriptionsymbol_enum.htm#entickhistory) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.