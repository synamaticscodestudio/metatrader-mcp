# CommissionMonthly (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ CommissionMonthly | [](imtdaily_commissiondaily.md "CommissionDaily") [](imtdaily_agentdaily.md "AgentDaily") |
| --- | --- | --- |
| --- | --- |

IMTDaily::CommissionMonthly
Get the total amount of a client's [commissions](imtconcommission.md "IMTConCommission") for the current month in a report.
C++
double IMTDaily::CommissionMonthly() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.CommissionMonthly()  
---  
Return Value
The total amount of commissions charged from a client for the current month in a report.
IMTDaily::CommissionMonthly
Set the total amount of a client's [commissions](imtconcommission.md "IMTConCommission") for the current month in a report.
C++
MTAPIRES IMTDaily::CommissionMonthly( const double comm // Monthly commissions )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.CommissionMonthly( double comm // Monthly commissions )  
---  
Parameters
comm
[in] The total amount of commissions charged from a client for the current month in a report.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.