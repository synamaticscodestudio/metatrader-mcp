# SwapRateSunday (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ SwapRateSunday | [](imtconsymbol_swapflags.md "SwapFlags") [](imtconsymbol_swapratemonday.md "SwapRateMonday") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::SwapRateSunday
Get swap multiplier for Sundays.
C++
double IMTConSymbol::SwapRateSunday() const  
---  
.NET (Gateway/Manager API)
double CIMTConSymbol.SwapRateSunday()  
---  
Python (Manager API)
MTConSymbol.SwapRateSunday  
---  
Return Value
Swap multiplier.
Note
This multiplier is applied to the calculated swap value before charging on the specified day. With the value of 1 a regular amount is charged, 3 triples the swap, and no swap is charged with 0.
IMTConSymbol::SwapRateSunday
Set swap multiplier for Sundays.
C++
MTAPIRES IMTConSymbol::SwapRateSunday( const double rate // Swap multiplier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.SwapRateSunday( double rate // Swap multiplier )  
---  
Python (Manager API)
MTConSymbol.SwapRateSunday  
---  
Parameters
rate
[in] Swap multiplier.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a response code describing the error is returned.
Note
This multiplier is applied to the calculated swap value before charging on the specified day. With the value of 1 a regular amount is charged, 3 triples the swap, and no swap is charged with 0.