# OnHistoryClean (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTHistorySink ](imthistorysink.md "IMTHistorySink")/ OnHistoryClean | [](imthistorysink_onhistorydelete.md "OnHistoryDelete") [](imthistorysink_onhistorysync.md "OnHistorySync") |
| --- | --- | --- |
| --- | --- |

IMTHistorySink::OnHistoryClean
A handler of the event of clearing closed orders of a client.
C++
virtual void IMTHistorySink::OnHistoryClean( const UINT64 login // User's login )  
---  
.NET
virtual void CIMTHistorySink.OnHistoryClean( ulong login // User's login )  
---  
Parameters
login
[in] The login of a user.
Note
This method is used in Server API only.
Every day, at server time, expired demo accounts are automatically deleted on trade servers. All closed orders of these accounts are also deleted. The handler notifies of such an operation and transmits the logins of the accounts whose orders were deleted.
This handler can be used, for example, during the synchronization of an external database of orders with a database of orders on a trade server.