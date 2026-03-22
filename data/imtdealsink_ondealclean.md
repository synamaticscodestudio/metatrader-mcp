# OnDealClean (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDealSink ](imtdealsink.md "IMTDealSink")/ OnDealClean | [](imtdealsink_ondealdelete.md "OnDealDelete") [](imtdealsink_ondealsync.md "OnDealSync") |
| --- | --- | --- |
| --- | --- |

IMTDealSink::OnDealClean
A handler of the event of clearing of a client's deals.
C++
virtual void IMTDealSink::OnDealClean( const UINT64 login // User's login )  
---  
.NET (Gateway/Manager API)
virtual void CIMTDealSink.OnDealClean( ulong login // User's login )  
---  
Parameters
login
[in] The login of a user.
Note
Every day, at server time, expired demo accounts are automatically deleted on trade servers. All deals of these accounts are also deleted. The handler notifies of such an operation and transmits the logins of the accounts whose deals were deleted.
This handler can be used, for example, during the synchronization of an external base of deals with a base of deals on a trade server.