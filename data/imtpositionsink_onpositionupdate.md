# OnPositionUpdate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPositionSink ](imtpositionsink.md "IMTPositionSink")/ OnPositionUpdate | [](imtpositionsink_onpositionadd.md "OnPositionAdd") [](imtpositionsink_onpositiondelete.md "OnPositionDelete") |
| --- | --- | --- |
| --- | --- |

IMTPositionSink::OnPositionUpdate
A handler of an event of trade position modification.
C++
virtual void IMTPositionSink::OnPositionUpdate( const IMTPosition* position // A pointer to the position object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTPositionSink.OnPositionUpdate( CIMTPosition position // Position object )  
---  
Parameters
position
[in] A pointer to the object of the updated position.
Note
This method is called by the API to notify that a trade position has been modified.