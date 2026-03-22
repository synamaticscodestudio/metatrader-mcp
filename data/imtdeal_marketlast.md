# MarketLast (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ MarketLast | [](imtdeal_marketask.md "MarketAsk") [](imtdeal_modificationflags.md "ModificationFlags") |
| --- | --- | --- |
| --- | --- |

IMTDeal::MarketLast
Get the market Last price as at the time of deal execution by the server.
C++
double IMTDeal::MarketLast() const  
---  
.NET (Gateway/Manager API)
double CIMTDeal.MarketLast()  
---  
Python
MTDeal.MarketLast  
---  
Return Value
The market Last price as at the time of deal execution by the server.
Note
This field stores the market price not as at the time when the request is placed in the terminal, but as at the time when the deal is executed by the trade server.
The field is only filled for the deals which were created after the platform was updated to build 2890 or higher. For earlier deals, the value will be zero.