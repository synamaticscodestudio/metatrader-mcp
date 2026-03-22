# PriceTP (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ PriceTP | [](imtorder_pricesl.md "PriceSL") [](imtorder_volumeinitial.md "VolumeInitial") |
| --- | --- | --- |
| --- | --- |

IMTOrder::PriceTP
Gets the [Take Profit](order_types.htm#take_profit) level of an order.
C++
double IMTOrder::PriceTP() const  
---  
.NET (Gateway/Manager API)
double CIMTOrder.PriceTP()  
---  
Python
MTOrder.PriceTP  
---  
Return Value
The Take Profit level of an order.
IMTOrder::PriceTP
Set the [Take Profit](order_types.htm#take_profit) level of an order.
C++
MTAPIRES IMTOrder::PriceTP( const double price // The Take Profit level )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.PriceTP( double price // The Take Profit level )  
---  
Python
MTOrder.PriceTP  
---  
Parameters
price
[in] The Take Profit level of an order.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.