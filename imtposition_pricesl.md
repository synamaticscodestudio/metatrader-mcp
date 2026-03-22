# PriceSL (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ PriceSL | [](imtposition_pricecurrent.md "PriceCurrent") [](imtposition_pricetp.md "PriceTP") |
| --- | --- | --- |
| --- | --- |

IMTPosition::PriceSL
Gets the [Stop Loss](order_types.htm#stop_loss) level of a trade position.
C++
double IMTPosition::PriceSL() const  
---  
.NET (Gateway/Manager API)
double CIMTPosition.PriceSL()  
---  
Return Value
The Stop Loss level of a trade position.
IMTPosition::PriceSL
Sets the [Stop Loss](order_types.htm#stop_loss) level of a trade position.
C++
MTAPIRES IMTPosition::PriceSL( const double price // The Stop Loss level )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPosition.PriceSL( double price // The Stop Loss level )  
---  
Parameters
price
[in] The Stop Loss level of a trade position.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.