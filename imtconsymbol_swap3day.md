# Swap3Day (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ Swap3Day | [](imtconsymbol_swapshort.md "SwapShort") [](imtconsymbol_swapyeardays.md "SwapYearDays") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::Swap3Day
Get the triple swap day.
C++
UINT IMTConSymbol::Swap3Day() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.Swap3Day()  
---  
Return Value
The triple swap day as a value from the [IMTConSymbol::EnSwapDays](imtconsymbol_enum.htm#enswapdays) enumeration.
IMTConSymbol::Swap3Day
Set the triple swap day.
C++
MTAPIRES IMTConSymbol::Swap3Day( const UINT day // Triple-swap day )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.Swap3Day( uint day // Triple-swap day )  
---  
Parameters
day
[in] Triple swap day. Passed as a value from the [IMTConSymbol::EnSwapDays](imtconsymbol_enum.htm#enswapdays) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method is obsolete and is no longer used. To set a triple swap day, use the [IMTConSymbol::SwapRate*](imtconsymbol_swapratesunday.md "SwapRateSunday") methods.
When this method is called, the swap multiplier of 3 is set to the corresponding day, while a multiplier of 1 is used for all other days except Saturday and Sunday.