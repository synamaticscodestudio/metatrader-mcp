# OnDailyUpdate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDailySink ](imtdailysink.md "IMTDailySink")/ OnDailyUpdate | [](imtdailysink_ondailyadd.md "OnDailyAdd") [](imtdailysink_ondailydelete.md "OnDailyDelete") |
| --- | --- | --- |
| --- | --- |

IMTDailySink::OnDailyUpdate
A handler of the event of updating a daily report.
C++
virtual void IMTDailySink::OnDailyUpdate( const IMTDaily* daily // A pointer to a daily report )  
---  
.NET (Gateway/Manager API)
virtual void CIMTDailySink.OnDailyUpdate( CIMTDaily daily // A daily report )  
---  
Parameters
daily
[in] A pointer to the object of an updated daily report.
Note
This method is used in Server and Report API only.