# PriceSL (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ PriceSL | [](imtdeal_price.md "Price") [](imtdeal_pricetp.md "PriceTP") |
| --- | --- | --- |
| --- | --- |

IMTDeal::PriceSL
Gets the [Stop Loss](order_types.htm#stop_loss) level of a deal.
C++
double IMTDeal::PriceSL() const  
---  
.NET (Gateway/Manager API)
double CIMTDeal.PriceSL()  
---  
Python
MTDeal.PriceSL  
---  
Return Value
The Stop Loss level of a deal.
Note
Stop Loss values for entry and reversal deals are set in accordance with the Stop Loss of orders, which initiated these deals. The Stop Loss values ​​of appropriate positions as of the time of position closing are used for exit deals.
IMTDeal::PriceSL
Sets the [Stop Loss](order_types.htm#stop_loss) Stop Loss of a deal.
C++
MTAPIRES IMTDeal::PriceSL( const double price // The Stop Loss level )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.PriceSL( double price // The Stop Loss level )  
---  
Python
MTDeal.PriceSL  
---  
Parameters
price
[in] The Stop Loss level of a deal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.