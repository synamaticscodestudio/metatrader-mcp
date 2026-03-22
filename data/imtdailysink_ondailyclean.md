# OnDailyClear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDailySink ](imtdailysink.md "IMTDailySink")/ OnDailyClear | [](imtdailysink_ondailydelete.md "OnDailyDelete") [](imtdailysink_ondailysync.md "OnDailySync") |
| --- | --- | --- |
| --- | --- |

IMTDailySink::OnDailyClean
A handler of the event of clearing of a client's daily reports.
C++
virtual void IMTDailySink::OnDailyClean( const UINT64 login // User's login )  
---  
.NET (Gateway/Manager API)
virtual void CIMTDailySink.OnDailyClean( ulong login // User's login )  
---  
Parameters
login
[in] The login of a user.
Note
Every day, at server time, expired demo accounts are automatically deleted on trade servers. All daily reports of these accounts are also deleted. The handler notifies of such an operation and transmits the logins of the accounts whose daily reports were deleted.
This handler can be used, for example, during the synchronization of an external base of report with a base of daily reports of a trade server.
This method is used in Server and Report API only.