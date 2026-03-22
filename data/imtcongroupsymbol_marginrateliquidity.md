# MarginRateLiquidity (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ MarginRateLiquidity | [](imtcongroupsymbol_marginratemaintenancedefault.md "MarginRateMaintenanceDefault") [](imtcongroupsymbol_marginrateliquiditydefault.md "MarginRateLiquidityDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::MarginRateLiquidity
Gets symbol liquidity rate for this group. The liquidity margin rate determines the amount of the current value of an asset for the specified financial instrument, which will be taken into account as collateral (accounted for in client's equity).
C++
double IMTConGroupSymbol::MarginRateLiquidity() const  
---  
.NET (Gateway/Manager API)
double CIMTConGroupSymbol.MarginRateLiquidity()  
---  
Python (Manager API)
MTConGroupSymbol.MarginRateLiquidity  
---  
Return Value
The liquidity rate of a symbol.
IMTConGroupSymbol::MarginRateLiquidity
Sets symbol liquidity rate for this group. The liquidity margin rate determines the amount of the current value of an asset for the specified financial instrument, which will be taken into account as collateral (accounted for in client's equity).
C++
MTAPIRES IMTConGroupSymbol::MarginRateLiquidity( const double margin_rate // Liquidity rate )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.MarginRateLiquidity( double margin_rate // Liquidity rate )  
---  
Python (Manager API)
MTConGroupSymbol.MarginRateLiquidity  
---  
Parameters
margin_rate
[in] Symbol liquidity rate.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.