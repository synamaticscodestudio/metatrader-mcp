# OnDailyDelete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDailySink ](imtdailysink.md "IMTDailySink")/ OnDailyDelete | [](imtdailysink_ondailyupdate.md "OnDailyUpdate") [](imtdailysink_ondailyclean.md "OnDailyClear") |
| --- | --- | --- |
| --- | --- |

IMTDailySink::OnDailyDelete
A handler of the event of removing a daily report.
C++
virtual void IMTDailySink::OnDailyDelete( const IMTDaily* daily // A pointer to a daily report )  
---  
.NET (Gateway/Manager API)
virtual void CIMTDailySink.OnDailyDelete( CIMTDaily daily // A daily report )  
---  
Parameters
daily
[in] A pointer to the object of a deleted daily report.
Note
This method is used in Server and Report API only.