# ID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ ID | [](imtrequest_print.md "Print") [](imtrequest_login.md "Login") |
| --- | --- | --- |
| --- | --- |

IMTRequest::ID
Get the request ID.
C++
UINT IMTRequest::ID() const  
---  
.NET (Gateway/Manager API)
uint CIMTRequest.ID()  
---  
Return Value
Request ID.
Note
Identifiers provide a uniqueness of trade requests, they are stored until server restart.