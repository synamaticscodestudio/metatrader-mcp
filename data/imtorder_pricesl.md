# PriceSL (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ PriceSL | [](imtorder_pricecurrent.md "PriceCurrent") [](imtorder_pricetp.md "PriceTP") |
| --- | --- | --- |
| --- | --- |

IMTOrder::PriceSL
Gets the [Stop Loss](order_types.htm#stop_loss) level of an order.
C++
double IMTOrder::PriceSL() const  
---  
.NET (Gateway/Manager API)
double CIMTOrder.PriceSL()  
---  
Python
MTOrder.PriceSL  
---  
Return Value
The Stop Loss level of an order.
IMTOrder::PriceSL
Sets the [Stop Loss](order_types.htm#stop_loss) Stop Loss.
C++
MTAPIRES IMTOrder::PriceSL( const double price // The Stop Loss level )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.PriceSL( double price // The Stop Loss level )  
---  
Python
MTOrder.PriceSL  
---  
Parameters
price
[in] The Stop Loss level of an order.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.