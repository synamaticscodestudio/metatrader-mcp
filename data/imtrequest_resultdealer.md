# ResultDealer (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ ResultDealer | [](imtrequest_resultretcode.md "ResultRetcode") [](imtrequest_resultdeal.md "ResultDeal") |
| --- | --- | --- |
| --- | --- |

IMTRequest::ResultDealer
Get the login of the dealer processing the request.
C++
UINT64 IMTRequest::ResultDealer() const  
---  
.NET (Gateway/Manager API)
ulong CIMTRequest.ResultDealer()  
---  
Return Value
The login of the dealer processing the request.
If the return value is 0, it means that the request is handled automatically, or the request has not been yet accepted for processing (additional analysis of [IMTRequest::ResultRetcode](imtrequest_resultretcode.md "ResultRetcode") is required).