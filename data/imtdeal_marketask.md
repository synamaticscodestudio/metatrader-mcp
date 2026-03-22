# MarketAsk (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ MarketAsk | [](imtdeal_marketbid.md "MarketBid") [](imtdeal_marketlast.md "MarketLast") |
| --- | --- | --- |
| --- | --- |

IMTDeal::MarketAsk
Get the market Ask price as at the time of deal execution by the server.
C++
double IMTDeal::MarketAsk() const  
---  
.NET (Gateway/Manager API)
double CIMTDeal.MarketAsk()  
---  
Python
MTDeal.MarketAsk  
---  
Return Value
The market Ask price as at the time of deal execution by the server.
Note
This field stores the market price not as at the time when the request is placed in the terminal, but as at the time when the deal is executed by the trade server.
The field is only filled for the deals which were created after the platform was updated to build 2890 or higher. For earlier deals, the value will be zero.