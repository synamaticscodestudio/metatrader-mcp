# PriceTP (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ PriceTP | [](imtdeal_pricesl.md "PriceSL") [](imtdeal_volume.md "Volume") |
| --- | --- | --- |
| --- | --- |

IMTDeal::PriceTP
Gets the [Take Profit](order_types.htm#take_profit) level of a deal.
C++
double IMTDeal::PriceTP() const  
---  
.NET (Gateway/Manager API)
double CIMTDeal.PriceTP()  
---  
Python
MTDeal.PriceTP  
---  
Return Value
The Take Profit level of an order.
Note
Take Profit values for entry and reversal deals are set in accordance with the Take Profit of orders, which initiated these deals. The Take Profit values ​​of appropriate positions as of the time of position closing are used for exit deals. 
IMTOrder::PriceTP
Set the [Take Profit](order_types.htm#take_profit) level of a deal.
C++
MTAPIRES IMTDeal::PriceTP( const double price // The Take Profit level )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.PriceTP( double price // The Take Profit level )  
---  
Python
MTDeal.PriceTP  
---  
Parameters
price
[in] The Take Profit level of a deal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.