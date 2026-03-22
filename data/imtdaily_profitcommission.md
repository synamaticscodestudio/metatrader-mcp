# ProfitCommission (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ ProfitCommission | [](imtdaily_profitstorage.md "ProfitStorage") [](imtdaily_profitequity.md "ProfitEquity") |
| --- | --- | --- |
| --- | --- |

IMTDaily::ProfitCommission
Get the current unfixed commission of a client in a daily report.
C++
double IMTDaily::ProfitCommission() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.ProfitCommission()  
---  
Return Value
The current unfixed commission of a client in a daily report (commissions that have been charged but not yet reflected in the balance).
Note
The field is deprecated and is no longer used.
IMTDaily::ProfitCommission
Set the current unfixed commission of a client in a daily report.
C++
MTAPIRES IMTDaily::ProfitCommission( const double commission // Commission )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.ProfitCommission( double commission // Commission )  
---  
Parameters
commission
[in] The current unfixed commission of a client in a daily report.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The current unfixed commission includes commissions already charged but not yet reflected in the balance.
The field is deprecated and is no longer used.