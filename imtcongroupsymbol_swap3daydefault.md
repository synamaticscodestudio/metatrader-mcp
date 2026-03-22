# Swap3DayDefault (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ Swap3DayDefault | [](imtcongroupsymbol_swap3day.md "Swap3Day") [](imtcongroupsymbol_swapyeardays.md "SwapYearDays") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::Swap3DayDefault
Get the default [day to charge triple swap](imtconsymbol_swap3day.md "Swap3Day") set for a symbol. For a more detailed description, please read the ["Use of Default method"](imtcongroupsymbol.htm#default) section.
C++
INT IMTConGroupSymbol::Swap3DayDefault() const  
---  
.NET (Gateway/Manager API)
int IMTConGroupSymbol::Swap3DayDefault()  
---  
Note
The method is obsolete and is no longer used. Please use default methods for the relevant days [IMTConGroupSymbol::SwapRate*Default](imtcongroupsymbol_swapratesundaydefault.md "SwapRateSundayDefault") instead.