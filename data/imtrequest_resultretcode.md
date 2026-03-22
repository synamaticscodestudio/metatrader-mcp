# ResultRetcode (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ ResultRetcode | [](imtrequest_comment.md "Comment") [](imtrequest_resultdealer.md "ResultDealer") |
| --- | --- | --- |
| --- | --- |

IMTRequest::ResultRetcode
Get the current state of a trade request.
C++
MTAPIRES IMTRequest::ResultRetcode() const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.ResultRetcode()  
---  
Return Value
[Return code](retcodes_trade_request.md "Trade Requests") that corresponds to the current state of a trade request.
Note
When a request state change, the return value changes accordingly.