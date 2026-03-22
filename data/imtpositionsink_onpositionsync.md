# OnPositionSync (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPositionSink ](imtpositionsink.md "IMTPositionSink")/ OnPositionSync | [](imtpositionsink_onpositionclean.md "OnPositionClean") [](user_account.md "Accounts") |
| --- | --- | --- |
| --- | --- |

IMTPositionSink::OnPositionSync
A handler of the event of synchronization of a database of trade positions.
C++
virtual void IMTPositionSink::OnPositionSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTPositionSink.OnPositionSync()  
---  
Note
This method is called by the API to notify that synchronization of a database of trading positions is completed.
  * Server API — between the trade server and its backup server.
  * Manager API — between the trade server and the local data cache of the application.
