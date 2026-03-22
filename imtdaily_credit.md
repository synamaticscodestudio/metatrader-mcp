# Credit (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ Credit | [](imtdaily_balance.md "Balance") [](imtdaily_interestrate.md "InterestRate") |
| --- | --- | --- |
| --- | --- |

IMTDaily::Credit
Get the amount of a client's credit funds in a daily report.
C++
double IMTDaily::Credit() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.Credit()  
---  
Return Value
The amount of a client's credit funds in a daily report.
IMTDaily::Credit
Set the amount of a client's credit funds in a daily report.
C++
MTAPIRES IMTDaily::Credit( const double credit // Credit funds )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.Credit( double credit // Credit funds )  
---  
Parameters
credit
[in] The amount of a client's credit funds in a daily report.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.