# PositionShift (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ PositionShift | [](imtdaily_positionclear.md "PositionClear") [](imtdaily_positiontotal.md "PositionTotal") |
| --- | --- | --- |
| --- | --- |

IMTDaily::PositionShift
Move a [trade position](trading_position.md "Positions") in the list.
C++
MTAPIRES IMTDaily::PositionShift( const UINT pos, // Position in the list const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.PositionShift( uint pos, // Position in the list int shift // Shift )  
---  
Parameters
pos
[in] Position of a trade position, starting with 0.
shift
[in] Shift from its current position. A negative value means the shift to the top of the list, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.