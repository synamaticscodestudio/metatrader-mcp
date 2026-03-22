# PositionGet (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ PositionGet | [](imtdaily_positionnext.md "PositionNext") [](imtdaily_orderadd.md "OrderAdd") |
| --- | --- | --- |
| --- | --- |

IMTDaily::PositionGet
Get a [trade position](trading_position.md "Positions") by symbol name.
C++
MTAPIRES IMTDaily::PositionGet( LPCWSTR symbol, // Symbol name IMTPosition* position // Position object ) const  
---  
.NET (Gateway/Manager API)
MTAPIRES IMTDaily::PositionGet( string symbol, // Symbol name CIMTPosition position // Position object )  
---  
Parameters
symbol
[in] Symbol name.
position
[out] An object of a trade position. The 'position' object must be first created using the [IMTManagerAPI::PositionCreate](imtmanagerapi_positioncreate.md "PositionCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The [IMTConSymbol::Symbol](imtconsymbol_symbol.md "Symbol") value is used as the symbol name.