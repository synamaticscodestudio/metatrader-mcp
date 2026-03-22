# OnPositionClean (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPositionSink ](imtpositionsink.md "IMTPositionSink")/ OnPositionClean | [](imtpositionsink_onpositiondelete.md "OnPositionDelete") [](imtpositionsink_onpositionsync.md "OnPositionSync") |
| --- | --- | --- |
| --- | --- |

IMTPositionSink::OnPositionClean
A handler of the event of clearing trade positions of a client.
C++
virtual void IMTPositionSink::OnPositionClean( const UINT64 login // User's login )  
---  
.NET (Gateway/Manager API)
virtual void CIMTPositionSink.OnPositionClean( ulong login // User's login )  
---  
Parameters
login
[in] The login of a user.
Note
Every day, at server time, expired demo accounts are automatically deleted on trade servers. All positions of these accounts are also deleted. The handler notifies of such an operation and transmits the logins of the accounts whose positions were deleted.
This handler can be used, for example, during the synchronization of an external base of deals with a base of deals on a trade server.