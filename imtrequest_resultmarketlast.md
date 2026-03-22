# ResultMarketLast (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ ResultMarketLast | [](imtrequest_resultmarketask.md "ResultMarketAsk") [](imtrequest_resultcomment.md "ResultComment") |
| --- | --- | --- |
| --- | --- |

IMTRequest::ResultMarketLast
Get the market Last price when a request is processed by the server.
C++
double IMTRequest::ResultMarketLast() const  
---  
.NET (Gateway/Manager API)
double CIMTRequest.ResultMarketLast()  
---  
Return Value
The market Last price when a request is processed by the server.
Note
The market price is stored in this field at the moment of receiving and processing a request by the trade server rather than setting a request in the terminal.