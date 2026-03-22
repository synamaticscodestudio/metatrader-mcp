# MarginRateCurrency (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ MarginRateCurrency | [](imtcongroupsymbol_marginrateliquiditydefault.md "MarginRateLiquidityDefault") [](imtcongroupsymbol_marginratecurrencydefault.md "MarginRateCurrencyDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::MarginRateCurrency
Get the margin currency rate for this group.
C++
double IMTConGroupSymbol::MarginRateCurrency() const  
---  
.NET (Gateway/Manager API)
double CIMTConGroupSymbol.MarginRateCurrency()  
---  
Python (Manager API)
MTConGroupSymbol.MarginRateCurrency  
---  
Return Value
Currency margin rate.
Note
Margin currency rate — rate change radius of the currency, a futures contract is denominated in, relative to the Russian ruble. The parameter is used when calculating security deposit for futures contracts ([Exchange FORTS Futures](imtconsymbol_enum.htm#encalcmode)) traded on Moscow Exchange (calculating variation margin and security deposit using the current USD exchange rate). The values are sent by the Moscow Exchange when using the gateway MetaTrader 5 to MOEX Derivatives.
IMTConGroupSymbol::MarginRateCurrency
Set the margin currency rate for this group.
C++
MTAPIRES IMTConGroupSymbol::MarginRateCurrency( const double margin_rate // Margin currency rate )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.MarginRateCurrency( double margin_rate // Margin currency rate )  
---  
Python (Manager API)
MTConGroupSymbol.MarginRateCurrency  
---  
Parameters
margin
[in] Margin currency rate.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Margin currency rate — rate change radius of the currency, a futures contract is denominated in, relative to the Russian ruble. The parameter is used when calculating security deposit for futures contracts ([Exchange FORTS Futures](imtconsymbol_enum.htm#encalcmode)) traded on Moscow Exchange (calculating variation margin and security deposit using the current USD exchange rate). The values are sent by the Moscow Exchange when using the gateway MetaTrader 5 to MOEX Derivatives.