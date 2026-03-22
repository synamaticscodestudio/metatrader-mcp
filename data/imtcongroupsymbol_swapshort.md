# SwapShort (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ SwapShort | [](imtcongroupsymbol_swaplongdefault.md "SwapLongDefault") [](imtcongroupsymbol_swapshortdefault.md "SwapShortDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::SwapShort
Get the short position swap for a symbol for the group.
C++
double IMTConGroupSymbol::SwapShort() const  
---  
.NET (Gateway/Manager API)
double CIMTConGroupSymbol.SwapShort()  
---  
Python (Manager API)
MTConGroupSymbol.SwapShort  
---  
Return Value
The short position swap for a symbol for the group.
Note
Swap units depend on their calculation mode.
IMTConGroupSymbol::SwapShort
Sets the short position swap on a symbol for the group.
C++
MTAPIRES IMTConGroupSymbol::SwapShort( const double swap // Swap amount )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.SwapShort( double swap // Swap amount )  
---  
Python (Manager API)
MTConGroupSymbol.SwapShort  
---  
Parameters
swap
[in] The short position swap for a symbol for the group.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Swap units depend on their calculation mode.