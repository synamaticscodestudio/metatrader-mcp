# Swap3Day (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ Swap3Day | [](imtcongroupsymbol_swapshortdefault.md "SwapShortDefault") [](imtcongroupsymbol_swap3daydefault.md "Swap3DayDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::Swap3Day
Get the day to charge triple swap for a symbol for this group.
C++
INT IMTConGroupSymbol::Swap3Day() const  
---  
.NET (Gateway/Manager API)
int CIMTConGroupSymbol.Swap3Day()  
---  
Return Value
The triple swap day as a value from the [IMTConSymbol::EnSwapDays](imtconsymbol_enum.htm#enswapdays) enumeration.
IMTConGroupSymbol::Swap3Day
Set the day to charge triple swap for a symbol for this group.
C++
MTAPIRES IMTConGroupSymbol::Swap3Day( const INT day // Triple-swap day )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.Swap3Day( int day // Triple-swap day )  
---  
Parameters
day
[in] Triple swap day. Passed as a value from the [IMTConSymbol::EnSwapDays](imtconsymbol_enum.htm#enswapdays) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method is obsolete and is no longer used. To set a triple swap day, use the [IMTConGroupSymbol::SwapRate*](imtcongroupsymbol_swapratesunday.md "SwapRateSunday") methods.
When this method is called, the swap multiplier of 3 is set to the corresponding day, while a multiplier of 1 is used for all other days except Saturday and Sunday.