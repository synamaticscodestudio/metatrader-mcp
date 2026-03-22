# SwapRateMonday (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ SwapRateMonday | [](imtcongroupsymbol_swapratesundaydefault.md "SwapRateSundayDefault") [](imtcongroupsymbol_swapratemondaydefault.md "SwapRateMondayDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::SwapRateMonday
Get the Monday swap multiplier specified in symbol settings for the given group.
C++
double IMTConGroupSymbol::SwapRateMonday() const  
---  
.NET (Gateway/Manager API)
double CIMTConGroupSymbol.SwapRateMonday()  
---  
Python (Manager API)
MTConGroupSymbol.SwapRateMonday  
---  
Return Value
Swap multiplier.
Note
This multiplier is applied to the calculated swap value before charging on the specified day. With the value of 1 a regular amount is charged, 3 triples the swap, and no swap is charged with 0.
IMTConGroupSymbol::SwapRateMonday
Set the Monday swap multiplier in symbol settings for the given group.
C++
MTAPIRES IMTConGroupSymbol::SwapRateMonday( const double rate // Swap multiplier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.SwapRateMonday( double rate // Swap multiplier )  
---  
Python (Manager API)
MTConGroupSymbol.SwapRateMonday  
---  
Parameters
rate
[in] Swap multiplier.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a response code describing the error is returned.
Note
This multiplier is applied to the calculated swap value before charging on the specified day. With the value of 1 a regular amount is charged, 3 triples the swap, and no swap is charged with 0.