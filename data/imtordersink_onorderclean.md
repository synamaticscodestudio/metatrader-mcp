# OnOrderClean (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrderSink ](imtordersink.md "IMTOrderSink")/ OnOrderClean | [](imtordersink_onorderdelete.md "OnOrderDelete") [](imtordersink_onordersync.md "OnOrderSync") |
| --- | --- | --- |
| --- | --- |

IMTOrderSink::OnOrderClean
A handler of the event of clearing open orders of a client.
C++
virtual void IMTOrderSink::OnOrderClean( const UINT64 login // User's login )  
---  
.NET (Gateway/Manager API)
virtual void CIMTOrderSink.OnOrderClean( ulong login // User's login )  
---  
Parameters
login
[in] The login of a user.
Note
Every day, at server time, expired demo accounts are automatically deleted on trade servers. All open orders of these accounts are also deleted. The handler notifies of such an operation and transmits the logins of the accounts whose orders were deleted.
This handler can be used, for example, during the synchronization of an external database of orders with a database of orders on a trade server.