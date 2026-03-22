# ResultMarketBid (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ ResultMarketBid | [](imtrequest_resultdealerlast.md "ResultDealerLast") [](imtrequest_resultmarketask.md "ResultMarketAsk") |
| --- | --- | --- |
| --- | --- |

IMTRequest::ResultMarketBid
Get the market Bid price when a request is processed by the server.
C++
double IMTRequest::ResultMarketBid() const  
---  
.NET (Gateway/Manager API)
double CIMTRequest.ResultMarketBid()  
---  
Return Value
The market Bid price when a request is processed by the server.
Note
The market price is stored in this field at the moment of receiving and processing a request by the trade server rather than setting a request in the terminal.