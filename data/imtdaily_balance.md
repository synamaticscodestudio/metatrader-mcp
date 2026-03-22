# Balance (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ Balance | [](imtdaily_email.md "EMail") [](imtdaily_credit.md "Credit") |
| --- | --- | --- |
| --- | --- |

IMTDaily::Balance
Get the size of a client's balance in a daily report.
C++
double IMTDaily::Balance() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.Balance()  
---  
Return Value
The size of a client's balance in a daily report.
IMTDaily::Balance
Set the size of a client's balance in a daily report.
C++
MTAPIRES IMTDaily::Balance( const double balance // Balance )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.Balance( double balance // Balance )  
---  
Parameters
balance
[in] A client's balance in a daily report.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.