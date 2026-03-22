# Comment (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ Comment | [](imtrequest_spreaddiffbalance.md "SpreadDiffBalance") [](imtrequest_resultretcode.md "ResultRetcode") |
| --- | --- | --- |
| --- | --- |

IMTRequest::Comment
Get a comment to a trade request.
C++
LPCWSTR IMTRequest::Comment() const  
---  
.NET (Gateway/Manager API)
string CIMTRequest.Comment()  
---  
Return Value
If successful, it returns a pointer to the string a comment. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTRequest](imtrequest.md "IMTRequest") object.
To use the string after the removal of the object (call of the [IMTRequest::Release](imtrequest_release.md "Release") method of this object), a copy of it should be created.
IMTRequest::Comment
Set a comment to a trade request.
C++
MTAPIRES IMTRequest::Comment( LPCWSTR comment // Comment )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.Comment( string  comment // Comment )  
---  
Parameters
comment
[in] A comment to a request.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum comment length is 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.