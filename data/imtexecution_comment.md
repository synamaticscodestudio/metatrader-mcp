# Comment (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ Comment | [](imtexecution_digits.md "Digits") [](imtexecution_order.md "Order") |
| --- | --- | --- |
| --- | --- |

IMTExecution::Comment
Get a comment to a trade execution.
C++
LPCWSTR IMTExecution::Comment() const  
---  
.NET (Gateway/Manager API)
string CIMTExecution.Comment()  
---  
Return Value
If successful, it returns a pointer to the string a comment. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of [IMTExecution](imtexecution.md "IMTExecution") object.
To use the line after the object removal (call of [IMTExecution::Release](imtexecution_release.md "Release") method of this object), a copy of it should be created.
IMTExecution::Comment
Set a comment to a trade execution.
C++
MTAPIRES IMTExecution::Comment( LPCWSTR comment // Comment )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.Comment( string comment // Comment )  
---  
Parameters
comment
[in] A comment to a trade execution.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum comment length is 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.