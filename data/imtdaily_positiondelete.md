# PositionDelete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ PositionDelete | [](imtdaily_positionupdate.md "PositionUpdate") [](imtdaily_positionclear.md "PositionClear") |
| --- | --- | --- |
| --- | --- |

IMTDaily::PositionDelete
Delete a [trade position](trading_position.md "Positions") from a daily report by its index.
C++
MTAPIRES IMTDaily::PositionDelete( const UINT pos // Position in the list )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.PositionDelete( uint pos // Position in the list )  
---  
Parameters
pos
[in] The position of a trade position in the list, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.