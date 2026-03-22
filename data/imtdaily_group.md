# Group (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ Group | [](imtdaily_name.md "Name") [](imtdaily_currency.md "Currency") |
| --- | --- | --- |
| --- | --- |

IMTDaily::Group
Get the [group](imtcongroup.md "IMTConGroup") of a client in a daily report.
C++
LPCWSTR IMTDaily::Group() const  
---  
.NET (Gateway/Manager API)
string CIMTDaily.Group()  
---  
Return Value
If successful, it returns a pointer to a string with the client group in a daily report. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTDaily](imtdaily.md "\\IMTDaily") object.
To use the line after the object removal (call of the [IMTDaily::Release](imtdaily_release.md "Release") method of this object), a copy of it should be created.
IMTDaily::Group
Set the [group](imtcongroup.md "IMTConGroup") of a client in a daily report.
C++
MTAPIRES IMTDaily::Group( LPCWSTR group // Group )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.Group( string group // Group )  
---  
Parameters
group
[in] Client group in a daily report.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The [IMTConGroup::Group](imtcongroup_group.md "Group") value is used as the group name.