# SwapRateFriday (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ SwapRateFriday | [](imtconsymbol_swapratethursday.md "SwapRateThursday") [](imtconsymbol_swapratesaturday.md "SwapRateSaturday") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::SwapRateFriday
Get swap multiplier for Fridays.
C++
double IMTConSymbol::SwapRateFriday() const  
---  
.NET (Gateway/Manager API)
double CIMTConSymbol.SwapRateFriday()  
---  
Python (Manager API)
MTConSymbol.SwapRateFriday  
---  
Return Value
Swap multiplier.
Note
This multiplier is applied to the calculated swap value before charging on the specified day. With the value of 1 a regular amount is charged, 3 triples the swap, and no swap is charged with 0.
IMTConSymbol::SwapRateFriday
Set swap multiplier for Fridays.
C++
MTAPIRES IMTConSymbol::SwapRateFriday( const double rate // Swap multiplier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.SwapRateFriday( double rate // Swap multiplier )  
---  
Python (Manager API)
MTConSymbol.SwapRateFriday  
---  
Parameters
rate
[in] Swap multiplier.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a response code describing the error is returned.
Note
This multiplier is applied to the calculated swap value before charging on the specified day. With the value of 1 a regular amount is charged, 3 triples the swap, and no swap is charged with 0.