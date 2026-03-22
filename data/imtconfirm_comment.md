# Comment (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTConfirm ](imtconfirm.md "IMTConfirm")/ Comment | [](imtconfirm_ticklast.md "TickLast") [](imtconfirm_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTConfirm::Comment
Get a comment to the confirmation of a trade request.
C++
LPCWSTR IMTConfirm::Comment() const  
---  
.NET (Gateway/Manager API)
sting CIMTConfirm.Comment()  
---  
Return Value
If successful, it returns a pointer to the string a comment. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConfirm](imtconfirm.md "IMTConfirm") object.
To use the string after the object removal (call of the [IMTConfirm::Release](imtconfirm_release.md "Release") method of this object), a copy of it should be created.
IMTConfirm::Comment
Set a comment to the confirmation of a trade request.
C++
MTAPIRES IMTConfirm::Comment( LPCWSTR comment // Comment )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConfirm.Comment( string comment // Comment )  
---  
Parameters
comment
[in] A comment to request confirmation.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This comment is displayed in the trading dialog of a client.
The maximum comment length is 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.