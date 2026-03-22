# MarginRateCurrencyDefault (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ MarginRateCurrencyDefault | [](imtcongroupsymbol_marginratecurrency.md "MarginRateCurrency") [](imtcongroupsymbol_marginlong.md "MarginLong") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::MarginRateCurrencyDefault
Get the default margin currency rate set for the symbol. For a more detailed description, please read the ["Use of Default method"](imtcongroupsymbol.htm#default) section.
C++
double IMTConGroupSymbol::MarginRateCurrencyDefault() const  
---  
.NET (Gateway/Manager API)
double CIMTConGroupSymbol.MarginRateCurrencyDefault()  
---  
Python (Manager API)
MTConGroupSymbol.MarginRateCurrencyDefault  
---  
Note
Margin currency rate — rate change radius of the currency, a futures contract is denominated in, relative to the Russian ruble. The parameter is used when calculating security deposit for futures contracts ([Exchange FORTS Futures](imtconsymbol_enum.htm#encalcmode)) traded on Moscow Exchange (calculating variation margin and security deposit using the current USD exchange rate). The values are sent by the Moscow Exchange when using the gateway MetaTrader 5 to MOEX Derivatives.