# PositionByID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ PositionByID | [](imtorder_positionid.md "PositionID") [](imtorder_comment.md "Comment") |
| --- | --- | --- |
| --- | --- |

IMTOrder::PositionByID
Gets the ID (ticket) of the opposite position specified in the order.
C++
UINT64 IMTOrder::PositionByID() const  
---  
.NET (Gateway/Manager API)
ulong CIMTOrder.PositionByID()  
---  
Python
MTOrder.PositionByID  
---  
Return Value
The opposite position ID set in the order.
Note
It is specified when executing a close by operation ([EnOrderType::OP_CLOSE_BY](imtorder_enum.htm#enordertype)). The ticket of the position closed by an opposite one is specified in [IMTOrder::PositionID](imtorder_positionid.md "PositionID").
IMTOrder::PositionByID
Sets the ID (ticket) of an opposite position for the order.
C++
MTAPIRES IMTOrder::PositionByID( const UINT64 id // Opposite position ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.PositionByID( ulong id // Opposite position ID )  
---  
Python
MTOrder.PositionByID  
---  
Parameters
id
[in] The identifier of the opposite position for an order.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
It is specified when executing a close by operation ([EnOrderType::OP_CLOSE_BY](imtorder_enum.htm#enordertype)). The ticket of the position closed by an opposite one is specified in [IMTOrder::PositionID](imtorder_positionid.md "PositionID").