# Print (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ Print | [](imtrequest_clear.md "Clear") [](imtrequest_id.md "ID") |
| --- | --- | --- |
| --- | --- |

IMTRequest::Print
Get a string description of a trade request.
C++
LPCWSTR IMTRequest::Print( MTAPISTR& string // Request description string ) const  
---  
.NET (Gateway/Manager API)
string CIMTRequest.Print()  
---  
Parameters
string
[out] The request description string.
Return Value
A pointer to string that is passed as a parameter.
Note
The description string does not include the login of the client, to whom the request belongs.