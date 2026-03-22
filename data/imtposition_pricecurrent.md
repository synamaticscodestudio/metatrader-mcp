# PriceCurrent (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ PriceCurrent | [](imtposition_priceopen.md "PriceOpen") [](imtposition_pricesl.md "PriceSL") |
| --- | --- | --- |
| --- | --- |

IMTPosition::PriceCurrent
Get the current price of the symbol, for which a trade position has been opened.
C++
double IMTPosition::PriceCurrent() const  
---  
.NET (Gateway/Manager API)
double CIMTPosition.PriceCurrent()  
---  
Return Value
The current price of the symbol, for which a trade position has been opened.
IMTPosition::PriceCurrent
Set the current price of the symbol, for which a trade position has been opened.
C++
MTAPIRES IMTPosition::PriceCurrent( const double price // Current price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPosition.PriceCurrent( double price // Current price )  
---  
Parameters
price
[in] The current price of the symbol, for which a trade position has been opened.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.