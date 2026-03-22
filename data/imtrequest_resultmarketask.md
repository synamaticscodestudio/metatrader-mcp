# ResultMarketAsk (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ ResultMarketAsk | [](imtrequest_resultmarketbid.md "ResultMarketBid") [](imtrequest_resultmarketlast.md "ResultMarketLast") |
| --- | --- | --- |
| --- | --- |

IMTRequest::ResultMarketAsk
Get the market Ask price when a request is processed by the server.
C++
double IMTRequest::ResultMarketAsk() const  
---  
.NET (Gateway/Manager API)
double CIMTRequest.ResultMarketAsk()  
---  
Return Value
The market Ask price when a request is processed by the server.
Note
The market price is stored in this field at the moment of receiving and processing a request by the trade server rather than setting a request in the terminal.