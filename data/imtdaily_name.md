# Name (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ Name | [](imtdaily_login.md "Login") [](imtdaily_group.md "Group") |
| --- | --- | --- |
| --- | --- |

IMTDaily::Name
Get the name of a client in the daily report
C++
LPCWSTR IMTDaily::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTDaily.Name()  
---  
Return Value
If successful, it returns a pointer to a string with the client name in the daily report. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTDaily](imtdaily.md "\\IMTDaily") object.
To use the line after the object removal (call of the [IMTDaily::Release](imtdaily_release.md "Release") method of this object), a copy of it should be created.
IMTDaily::Name
Set the name of a client in the daily report
C++
MTAPIRES IMTDaily::Name( LPCWSTR name // Name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.Name( string name // Name )  
---  
Parameters
name
[in] The name of a client in a daily report.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The length of the name is limited to 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.