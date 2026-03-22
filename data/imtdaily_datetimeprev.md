# DatetimePrev (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ DatetimePrev | [](imtdaily_datetime.md "Datetime") [](imtdaily_login.md "Login") |
| --- | --- | --- |
| --- | --- |

IMTDaily::DatetimePrev
Get the date and time of the previous daily report generation.
C++
INT64 IMTDaily::DatetimePrev() const  
---  
.NET (Gateway/Manager API)
long CIMTDaily.DatetimePrev()  
---  
Return Value
Date and time of the previous daily report generation, in seconds that have elapsed since 01.01.1970.
IMTDaily::DatetimePrev
Set the date and time of the previous daily report generation.
C++
MTAPIRES IMTDaily::DatetimePrev( const INT64 datetime // Date and time )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.DatetimePrev( long datetime // Date and time )  
---  
Parameters
datetime
[in] Date and time of the previous daily report generation, in seconds that have elapsed since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.