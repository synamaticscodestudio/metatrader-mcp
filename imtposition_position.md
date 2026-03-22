# Position (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ Position | [](imtposition_contractsize.md "ContractSize") [](imtposition_externalid.md "ExternalID") |
| --- | --- | --- |
| --- | --- |

IMTPosition::Position
Gets the ticket (a unique number) of a trade position in the MetaTrader 5 platform.
C++
UINT64 IMTPosition::Position() const  
---  
.NET (Gateway/Manager API)
ulong CIMTPosition.Position()  
---  
Return Value
The ticket of a position in the MetaTrader 5 platform.
Note
Usually, a position ticket matches the ticket of the order ([IMTOrder::Order](imtorder_order.md "Order")) used to open the position, except when the position is reversed in a single [IMTDeal::ENTRY_INOUT](imtdeal_enum.htm#endealentry) deal (used in the netting mode). Also, the ticket is changed for positions re-opened as a result of utility operations, as well as for the ones opened without setting an order. The ticket may be different for positions with the following opening reasons ([IMTPosition::EnPositionReason](imtposition_enum.htm#enpositionreason)):
  * POSITION_REASON_ROLLOVER — charging swaps with position re-opening
  * POSITION_REASON_SPLIT — re-opening a position after a split
  * POSITION_REASON_VMARGIN — re-opening a position after charging a variation margin
  * POSITION_REASON_SYNC — opening a position when synchronizing with an external system (without a previous order)
  * POSITION_REASON_TRANSFER — relocating a position with a calculated price to a new symbol with the same underlying asset

Tickets of positions having other opening reasons match initial orders.