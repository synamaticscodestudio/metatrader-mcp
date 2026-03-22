# SwapRateTuesday (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ SwapRateTuesday | [](imtconsymbol_swapratemonday.md "SwapRateMonday") [](imtconsymbol_swapratewednesday.md "SwapRateWednesday") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::SwapRateTuesday
Get swap multiplier for Tuesdays.
C++
double IMTConSymbol::SwapRateTuesday() const  
---  
.NET (Gateway/Manager API)
double CIMTConSymbol.SwapRateTuesday()  
---  
Python (Manager API)
MTConSymbol.SwapRateTuesday  
---  
Return Value
Swap multiplier.
Note
This multiplier is applied to the calculated swap value before charging on the specified day. With the value of 1 a regular amount is charged, 3 triples the swap, and no swap is charged with 0.
IMTConSymbol::SwapRateTuesday
Set swap multiplier for Tuesdays.
C++
MTAPIRES IMTConSymbol::SwapRateTuesday( const double rate // Swap multiplier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.SwapRateTuesday( double rate // Swap multiplier )  
---  
Python (Manager API)
MTConSymbol.SwapRateTuesday  
---  
Parameters
rate
[in] Swap multiplier.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a response code describing the error is returned.
Note
This multiplier is applied to the calculated swap value before charging on the specified day. With the value of 1 a regular amount is charged, 3 triples the swap, and no swap is charged with 0.