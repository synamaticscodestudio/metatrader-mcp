# PositionNext (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ PositionNext | [](imtdaily_positiontotal.md "PositionTotal") [](imtdaily_positionget.md "PositionGet") |
| --- | --- | --- |
| --- | --- |

IMTDaily::PositionNext
Get a [trade position](trading_position.md "Positions") by the index.
C++
MTAPIRES IMTDaily::PositionNext( const UINT pos, // Position in the list IMTPosition* position // Position object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.PositionNext( uint pos, // Position in the list CIMTPosition position // Position object )  
---  
Parameters
pos
[in] Position of a trade position, starting with 0.
position
[out] An object of a trade position. The 'position' object must be first created using the [IMTManagerAPI::PositionCreate](imtmanagerapi_positioncreate.md "PositionCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method copies parameters of a trade position with a specified index to the position object.