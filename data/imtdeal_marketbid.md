# MarketBid (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ MarketBid | [](imtdeal_actiongateway.md "ActionGateway") [](imtdeal_marketask.md "MarketAsk") |
| --- | --- | --- |
| --- | --- |

IMTDeal::MarketBid
Get the market Bid price as at the time of deal execution by the server.
C++
double IMTDeal::MarketBid() const  
---  
.NET (Gateway/Manager API)
double CIMTDeal.MarketBid()  
---  
Python
MTDeal.MarketBid  
---  
Return Value
The market Bid price as at the time of deal execution by the server.
Note
This field stores the market price not as at the time when the request is placed in the terminal, but as at the time when the deal is executed by the trade server.
The field is only filled for the deals which were created after the platform was updated to build 2890 or higher. For earlier deals, the value will be zero.