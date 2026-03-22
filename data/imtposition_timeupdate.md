# TimeUpdate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ TimeUpdate | [](imtposition_timecreate.md "TimeCreate") [](imtposition_timecreatemsc.md "TimeCreateMsc") |
| --- | --- | --- |
| --- | --- |

IMTPosition::TimeUpdate
Get the time of the last modification of a trade position.
C++
INT64 IMTPosition::TimeUpdate() const  
---  
.NET (Gateway/Manager API)
long CIMTPosition.TimeUpdate()  
---  
Return Value
Time of the last modification of a position, in seconds that have elapsed since 01.01.1970.
Note
Position modification time is the time of its last volume modification. It is actually the time of the last deal of the financial instrument that corresponds to this position. This time does not change when Stop Loss or Take Profit is modified or when the position is edited via the Administrator terminal or API.
IMTPosition::TimeUpdate
Set the time of the last modification of a trade position.
C++
MTAPIRES IMTPosition::TimeUpdate( const INT64 time // Last modification time )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPosition.TimeUpdate( long time // Last modification time )  
---  
Parameters
time
[in] Time of the last modification of a position, in seconds that have elapsed since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
If the value of this field is specified, the [IMTPosition::TimeUpdateMsc](imtposition_timeupdatemsc.md "TimeUpdateMsc") value will be filled in automatically.
Position modification time is the time of its last volume modification. It is actually the time of the last deal of the financial instrument that corresponds to this position. This time does not change when Stop Loss or Take Profit is modified or when the position is edited via the Administrator terminal or API.