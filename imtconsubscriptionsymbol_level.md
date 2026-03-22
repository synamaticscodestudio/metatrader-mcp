# Level (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscriptionSymbol ](imtconsubscriptionsymbol.md "IMTConSubscriptionSymbol")/ Level | [](imtconsubscriptionsymbol_symbol.md "Symbol") [](imtconsubscriptionsymbol_tickhistory.md "TickHistory") |
| --- | --- | --- |
| --- | --- |

IMTConSubscriptionSymbol::Level
Get the type of price data available by subscription.
C++
UINT64 IMTConSubscriptionSymbol::Level() const  
---  
.NET (Gateway/Manager API)
EnFlags CIMTConSubscriptionSymbol.Level()  
---  
Return Value
Type of price data as a value of the [IMTConSubscriptionSymbol::EnLevel](imtconsubscriptionsymbol_enum.htm#enlevel) enumeration.
IMTConSubscriptionSymbol::Level
Set the type of price data available by subscription.
C++
MTAPIRES IMTConSubscriptionSymbol::Level( const UINT64 level // Type of price data )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscriptionSymbol.Level( EnFlags level // Type of price data )  
---  
Parameters
level
[in] Type of price data as a value of the [IMTConSubscriptionSymbol::EnLevel](imtconsubscriptionsymbol_enum.htm#enlevel) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.