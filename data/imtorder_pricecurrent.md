# PriceCurrent (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ PriceCurrent | [](imtorder_pricetrigger.md "PriceTrigger") [](imtorder_pricesl.md "PriceSL") |
| --- | --- | --- |
| --- | --- |

IMTOrder::PriceCurrent
Get the current price of the symbol, for which an order has been placed.
C++
double IMTOrder::PriceCurrent() const  
---  
.NET (Gateway/Manager API)
double CIMTOrder.PriceCurrent()  
---  
Python
MTOrder.PriceCurrent  
---  
Return Value
The current price of the symbol, for which an order has been placed.
IMTOrder::PriceCurrent
Set the current price of the symbol, for which an order has been placed.
C++
MTAPIRES IMTOrder::PriceCurrent( const double price // Current price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.PriceCurrent( double price // Current price )  
---  
Python
MTOrder.PriceCurrent  
---  
Parameters
price
[in] The current price of the symbol, for which an order has been placed.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.