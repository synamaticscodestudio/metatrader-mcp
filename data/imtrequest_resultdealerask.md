# ResultDealerAsk (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ ResultDealerAsk | [](imtrequest_resultdealerbid.md "ResultDealerBid") [](imtrequest_resultdealerlast.md "ResultDealerLast") |
| --- | --- | --- |
| --- | --- |

IMTRequest::ResultDealerAsk
Get the Ask price confirmed by a dealer for this request.
C++
double IMTRequest::ResultDealerAsk() const  
---  
.NET (Gateway/Manager API)
double CIMTRequest.ResultDealerAsk()  
---  
Return Value
The Ask price confirmed by a dealer for this request.
The return value can be 0 if the request is not processed, or if price is not specified as a result of its confirmation.
Note
This field is used in cases where the dealer specifies new values of market prices while processing a request [IMTRequest::EnTradeActions](imtrequest_enum.htm#entradeactions) enumeration):
  * TA_PRICE — when processing a request of new prices for Request Execution.
  * TA_INSTANT — when requoting a deal request for Instant Execution.
