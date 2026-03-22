# Login (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ Login | [](imtdaily_datetimeprev.md "DatetimePrev") [](imtdaily_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTDaily::Login
Get the [login](imtuser.md "IMTUser") of the client for whom the daily report is generated.
C++
UINT64 IMTDaily::Login() const  
---  
.NET (Gateway/Manager API)
ulong CIMTDaily.Login()  
---  
Return Value
The login of a client for whom the daily report is generated.
IMTDaily::Login
Set the [login](imtuser.md "IMTUser") of a client in a daily report.
C++
MTAPIRES IMTDaily::Login( const UINT64 login // Login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.Login( ulong login // Login )  
---  
Parameters
login
[in] Client login in a daily report.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.