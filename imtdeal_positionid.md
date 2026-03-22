# PositionID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ PositionID | [](imtdeal_partyid.md "PartyID") [](imtdeal_comment.md "Comment") |
| --- | --- | --- |
| --- | --- |

IMTDeal::PositionID
Gets the position ID (ticket) specified in the deal.
C++
UINT64 IMTDeal::PositionID() const  
---  
.NET (Gateway/Manager API)
ulong CIMTDeal.PositionID()  
---  
Python
MTDeal.PositionID  
---  
Return Value
The position ID set in the deal.
Note
The position ID is used for analyzing the history of working with the position. A unique identifier PositionID is assigned to all orders and deals that open, modify and close this position, as well as to the position itself. This identifier corresponds to the ticket of the order, the execution of which resulted in position opening.
The identifier is not changed when a position is reversed in the netting mode.
IMTDeal::PositionID
Sets the position ID (ticket) for a deal.
C++
MTAPIRES IMTDeal::PositionID( const UINT64 id // Position ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.PositionID( ulong id // Position ID )  
---  
Python
MTDeal.PositionID  
---  
Parameters
id
[in] The position identifier for a deal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The position ID is used for analyzing the history of working with the position. A unique identifier PositionID is assigned to all orders and deals that open, modify and close this position, as well as to the position itself. This identifier corresponds to the ticket of the order, the execution of which resulted in position opening.
The identifier is not changed when a position is reversed in the netting mode.