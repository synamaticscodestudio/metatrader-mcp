# OnPositionDelete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPositionSink ](imtpositionsink.md "IMTPositionSink")/ OnPositionDelete | [](imtpositionsink_onpositionupdate.md "OnPositionUpdate") [](imtpositionsink_onpositionclean.md "OnPositionClean") |
| --- | --- | --- |
| --- | --- |

IMTPositionSink::OnPositionDelete
A handler of an event of trade position deletion.
C++
virtual void IMTPositionSink::OnPositionDelete( const IMTPosition* position // A pointer to the position object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTPositionSink.OnPositionDelete( CIMTPosition  position // Position object )  
---  
Parameters
position
[in] A pointer to the object of the deleted position. Due to architecture specifics, the deleted position is transmitted with zero values in Volume, VolumeExt, PriceOpen, TimeCreate, TimeCreateMsc, PriceSL and PriceTP fields.
Note
This method is called by the API to notify that a trade position has been deleted.
The handler is also called when changing the [group of an account](imtuser_group.md "Group"), if there are currently open positions on the account. In this case, the old position is deleted from the account in the old group and a new position is added in the new group. Therefore two events, [IMTPositionSink::OnPositionAdd](imtpositionsink_onpositionadd.md "OnPositionAdd") and IMTPositionSink::OnPositionDelete, are sequentially called for positions.