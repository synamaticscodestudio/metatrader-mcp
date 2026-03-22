# CommissionDaily (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ CommissionDaily | [](imtdaily_interestrate.md "InterestRate") [](imtdaily_commissionmonthly.md "CommissionMonthly") |
| --- | --- | --- |
| --- | --- |

IMTDaily::CommissionDaily
Get the amount of a client's [commissions](imtconcommission.md "IMTConCommission") for a day in the report.
C++
double IMTDaily::CommissionDaily() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.CommissionDaily()  
---  
Return Value
The amount of commissions charged from a client for a day in the report.
IMTDaily::CommissionDaily
Set the amount of a client's [commissions](imtconcommission.md "IMTConCommission") for a day in the report.
C++
MTAPIRES IMTDaily::CommissionDaily( const double comm // Daily commission )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.CommissionDaily( double comm // Daily commission )  
---  
Parameters
comm
[in] The amount of commissions charged from a client for a day in the report.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.