# PositionAdd (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ PositionAdd | [](imtdaily_dailyinterest.md "DailyInterest") [](imtdaily_positionupdate.md "PositionUpdate") |
| --- | --- | --- |
| --- | --- |

IMTDaily::PositionAdd
Add a [trade position](trading_position.md "Positions") to the daily report.
C++
MTAPIRES IMTDaily::PositionAdd( IMTPosition* position // An object of a trade position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.PositionAdd( CIMTPosition position // An object of a trade position )  
---  
Parameters
position
[in] An object of a trade position.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.