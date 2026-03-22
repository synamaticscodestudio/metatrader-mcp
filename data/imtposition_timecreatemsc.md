# TimeCreateMsc (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ TimeCreateMsc | [](imtposition_timeupdate.md "TimeUpdate") [](imtposition_timeupdatemsc.md "TimeUpdateMsc") |
| --- | --- | --- |
| --- | --- |

IMTPosition::TimeCreateMsc
Gets position creation time in milliseconds.
C++
INT64 IMTPosition::TimeCreateMsc() const  
---  
.NET (Gateway/Manager API)
long CIMTPosition.TimeCreateMsc()  
---  
Return Value
Date and time of position creation, in milliseconds that have elapsed since 01.01.1970.
IMTPosition::TimeCreateMsc
Sets position creation time in milliseconds.
C++
MTAPIRES IMTPosition::TimeCreateMsc( const INT64 time // Creation time )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPosition.TimeCreateMsc( long time // Creation time )  
---  
Parameters
time
[in] Date and time of position creation in milliseconds that have elapsed since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
If the value of this field is specified, the [IMTPosition::TimeCreate](imtposition_timecreate.md "TimeCreate") value will be filled in automatically.