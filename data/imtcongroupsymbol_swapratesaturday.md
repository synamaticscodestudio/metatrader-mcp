# SwapRateSaturday (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ SwapRateSaturday | [](imtcongroupsymbol_swapratefridaydefault.md "SwapRateFridayDefault") [](imtcongroupsymbol_swapratesaturdaydefault.md "SwapRateSaturdayDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::SwapRateSaturday
Get the Saturday swap multiplier specified in symbol settings for the given group.
C++
double IMTConGroupSymbol::SwapRateSaturday() const  
---  
.NET (Gateway/Manager API)
double CIMTConGroupSymbol.SwapRateSaturday()  
---  
Python (Manager API)
MTConGroupSymbol.SwapRateSaturday  
---  
Return Value
Swap multiplier.
Note
This multiplier is applied to the calculated swap value before charging on the specified day. With the value of 1 a regular amount is charged, 3 triples the swap, and no swap is charged with 0.
IMTConGroupSymbol::SwapRateSaturday
Set the Saturday swap multiplier in symbol settings for the given group.
C++
MTAPIRES IMTConGroupSymbol::SwapRateSaturday( const double rate // Swap multiplier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.SwapRateSaturday( double rate // Swap multiplier )  
---  
Python (Manager API)
MTConGroupSymbol.SwapRateSaturday  
---  
Parameters
rate
[in] Swap multiplier.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a response code describing the error is returned.
Note
This multiplier is applied to the calculated swap value before charging on the specified day. With the value of 1 a regular amount is charged, 3 triples the swap, and no swap is charged with 0.