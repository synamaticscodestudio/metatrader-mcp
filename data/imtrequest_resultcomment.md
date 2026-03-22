# ResultComment (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ ResultComment | [](imtrequest_resultmarketlast.md "ResultMarketLast") [](imtrequest_idclient.md "IDClient") |
| --- | --- | --- |
| --- | --- |

IMTRequest::ResultComment
Gets the comment added by a dealer after confirming the request.
C++
LPCWSTR IMTRequest::ResultComment() const  
---  
.NET (Gateway/Manager API)
string CIMTRequest.ResultComment()  
---  
Return Value
If successful, it returns a pointer to the string a comment. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTRequest](imtrequest.md "IMTRequest") object.
To use the string after the removal of the object (call of the [IMTRequest::Release](imtrequest_release.md "Release") method of this object), a copy of it should be created.
The maximum comment length is 32 characters (including the end-of-line character).