# ResultDealerLast (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ ResultDealerLast | [](imtrequest_resultdealerask.md "ResultDealerAsk") [](imtrequest_resultmarketbid.md "ResultMarketBid") |
| --- | --- | --- |
| --- | --- |

IMTRequest::ResultDealerLast
Get the Last price confirmed by a dealer for this request.
C++
double IMTRequest::ResultDealerLast() const  
---  
.NET (Gateway/Manager API)
double CIMTRequest.ResultDealerLast()  
---  
Return Value
The Last price confirmed by a dealer for this request.
The return value can be 0 if the request is not processed, or if price is not specified as a result of its confirmation.
Note
This field is used in cases where the dealer specifies new values of market prices while processing a request [IMTRequest::EnTradeActions](imtrequest_enum.htm#entradeactions) enumeration):
  * TA_PRICE — when processing a request of new prices for Request Execution.
  * TA_INSTANT — when requoting a deal request for Instant Execution.
