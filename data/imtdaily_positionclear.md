# PositionClear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ PositionClear | [](imtdaily_positiondelete.md "PositionDelete") [](imtdaily_positionshift.md "PositionShift") |
| --- | --- | --- |
| --- | --- |

IMTDaily::PositionClear
Clear the list of [positions](trading_position.md "Positions") in a daily report.
C++
MTAPIRES IMTDaily::PositionClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.PositionClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears the entire list of positions in a daily report.