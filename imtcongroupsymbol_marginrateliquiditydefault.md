# MarginRateLiquidityDefault (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ MarginRateLiquidityDefault | [](imtcongroupsymbol_marginrateliquidity.md "MarginRateLiquidity") [](imtcongroupsymbol_marginratecurrency.md "MarginRateCurrency") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::MarginRateLiquidityDefault
Gets the default liquidity rate of the symbol. For a more detailed description, please read the ["Use of Default method"](imtcongroupsymbol.htm#default) section.
C++
double IMTConGroupSymbol::MarginRateLiquidityDefault() const  
---  
.NET (Gateway/Manager API)
double CIMTConGroupSymbol.MarginRateLiquidityDefault()  
---  
Python (Manager API)
MTConGroupSymbol.MarginRateLiquidityDefault  
---  
Note
The liquidity margin rate determines the amount of the current value of an asset for the specified financial instrument, which will be taken into account as collateral (accounted for in client's equity).