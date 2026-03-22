# MarginRateLiquidity (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ MarginRateLiquidity | [](imtconsymbol_marginratecurrency.md "MarginRateCurrency") [](imtconsymbol_swapmode.md "SwapMode") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::MarginRateLiquidity
Get the liquidity rate of the symbol. The liquidity margin rate determines the amount of the current value of an asset for the specified financial instrument, which will be taken into account as collateral (accounted for in client's equity).
C++
double IMTConSymbol::MarginRateLiquidity() const  
---  
.NET (Gateway/Manager API)
double CIMTConSymbol.MarginRateLiquidity()  
---  
Python (Manager API)
MTConSymbol.MarginRateLiquidity  
---  
Return Value
The liquidity rate of a symbol.
IMTConSymbol::MarginRateLiquidity
Set the liquidity rate of the symbol. The liquidity margin rate determines the amount of the current value of an asset for the specified financial instrument, which will be taken into account as collateral (accounted for in client's equity).
C++
MTAPIRES IMTConSymbol::MarginRateLiquidity( const double margin_rate // Liquidity rate )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.MarginRateLiquidity( double margin_rate // Liquidity rate )  
---  
Python (Manager API)
MTConSymbol.MarginRateLiquidity  
---  
Parameters
margin_rate
[in] Symbol liquidity rate.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.