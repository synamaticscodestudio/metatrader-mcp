# SwapRateMonday (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ SwapRateMonday | [](imtconsymbol_swapratesunday.md "SwapRateSunday") [](imtconsymbol_swapratetuesday.md "SwapRateTuesday") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::SwapRateMonday
Get swap multiplier for Mondays.
C++
double IMTConSymbol::SwapRateMonday() const  
---  
.NET (Gateway/Manager API)
double CIMTConSymbol.SwapRateMonday()  
---  
Python (Manager API)
MTConSymbol.SwapRateMonday  
---  
Return Value
Swap multiplier.
Note
This multiplier is applied to the calculated swap value before charging on the specified day. With the value of 1 a regular amount is charged, 3 triples the swap, and no swap is charged with 0.
IMTConSymbol::SwapRateMonday
Set swap multiplier for Mondays.
C++
MTAPIRES IMTConSymbol::SwapRateMonday( const double rate // Swap multiplier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.SwapRateMonday( double rate // Swap multiplier )  
---  
Python (Manager API)
MTConSymbol.SwapRateMonday  
---  
Parameters
rate
[in] Swap multiplier.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a response code describing the error is returned.
Note
This multiplier is applied to the calculated swap value before charging on the specified day. With the value of 1 a regular amount is charged, 3 triples the swap, and no swap is charged with 0.