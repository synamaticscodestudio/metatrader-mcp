# PositionUpdate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ PositionUpdate | [](imtdaily_positionadd.md "PositionAdd") [](imtdaily_positiondelete.md "PositionDelete") |
| --- | --- | --- |
| --- | --- |

IMTDaily::PositionUpdate
Modify a [trade position](trading_position.md "Positions") in a daily report by its index.
C++
MTAPIRES IMTDaily::PositionUpdate( const UINT pos, // Position in the list const IMTPosition* position // An object of a trade position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.PositionUpdate( uint pos, // Position in the list CIMTPosition position // An object of a trade position )  
---  
Parameters
pos
[in] The position of a trade position in the list, starting with 0.
position
[in] An object of a trade position.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.