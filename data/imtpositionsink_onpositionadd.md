# OnPositionAdd (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPositionSink ](imtpositionsink.md "IMTPositionSink")/ OnPositionAdd | [](imtpositionsink.md "IMTPositionSink") [](imtpositionsink_onpositionupdate.md "OnPositionUpdate") |
| --- | --- | --- |
| --- | --- |

IMTPositionSink::OnPositionAdd
A handler of the event of adding a position.
C++
virtual void IMTPositionSink::OnPositionAdd( const IMTPosition* position // A pointer to the position object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTPositionSink::OnPositionAdd( CIMTPosition position // Position object )  
---  
Parameters
position
[in] A pointer to the object of the added position.
Note
This method is called by the API to notify that a new trade position has been added.
The handler is also called when changing the [group of an account](imtuser_group.md "Group"), if there are currently open positions on the account. In this case, the old position is deleted from the account in the old group and a new position is added in the new group. Therefore two events, IMTPositionSink::OnPositionAdd and [IMTPositionSink::OnPositionDelete](imtpositionsink_onpositiondelete.md "OnPositionDelete"), are sequentially called for positions.
When checking the account margin ([IMTAccount::Margin](imtaccount_margin.md "Margin")), you can received a double value from this event. The processes of moving an executed order from active to history and creating a position based on this order are asynchronous. Therefore, margin both for the order and for the position can be simultaneously reserved on the account for a short time.