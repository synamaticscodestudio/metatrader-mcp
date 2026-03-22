# SwapRateFriday (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ SwapRateFriday | [](imtcongroupsymbol_swapratethursdaydefault.md "SwapRateThursdayDefault") [](imtcongroupsymbol_swapratefridaydefault.md "SwapRateFridayDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::SwapRateFriday
Get the Friday swap multiplier specified in symbol settings for the given group.
C++
double IMTConGroupSymbol::SwapRateFriday() const  
---  
.NET (Gateway/Manager API)
double CIMTConGroupSymbol.SwapRateFriday()  
---  
Python (Manager API)
MTConGroupSymbol.SwapRateFriday  
---  
Return Value
Swap multiplier.
Note
This multiplier is applied to the calculated swap value before charging on the specified day. With the value of 1 a regular amount is charged, 3 triples the swap, and no swap is charged with 0.
IMTConGroupSymbol::SwapRateFriday
Set the Friday swap multiplier in symbol settings for the given group.
C++
MTAPIRES IMTConGroupSymbol::SwapRateFriday( const double rate // Swap multiplier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.SwapRateFriday( double rate // Swap multiplier )  
---  
Python (Manager API)
MTConGroupSymbol.SwapRateFriday  
---  
Parameters
rate
[in] Swap multiplier.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a response code describing the error is returned.
Note
This multiplier is applied to the calculated swap value before charging on the specified day. With the value of 1 a regular amount is charged, 3 triples the swap, and no swap is charged with 0.