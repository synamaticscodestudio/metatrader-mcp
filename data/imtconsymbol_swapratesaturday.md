# SwapRateSaturday (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ SwapRateSaturday | [](imtconsymbol_swapratefriday.md "SwapRateFriday") [](imtconsymbol_timestart.md "TimeStart") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::SwapRateSaturday
Get swap multiplier for Saturdays.
C++
double IMTConSymbol::SwapRateSaturday() const  
---  
.NET (Gateway/Manager API)
double CIMTConSymbol.SwapRateSaturday()  
---  
Python (Manager API)
MTConSymbol.SwapRateSaturday  
---  
Return Value
Swap multiplier.
Note
This multiplier is applied to the calculated swap value before charging on the specified day. With the value of 1 a regular amount is charged, 3 triples the swap, and no swap is charged with 0.
IMTConSymbol::SwapRateSaturday
Set swap multiplier for Saturdays.
C++
MTAPIRES IMTConSymbol::SwapRateSaturday( const double rate // Swap multiplier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.SwapRateSaturday( double rate // Swap multiplier )  
---  
Python (Manager API)
MTConSymbol.SwapRateSaturday  
---  
Parameters
rate
[in] Swap multiplier.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a response code describing the error is returned.
Note
This multiplier is applied to the calculated swap value before charging on the specified day. With the value of 1 a regular amount is charged, 3 triples the swap, and no swap is charged with 0.