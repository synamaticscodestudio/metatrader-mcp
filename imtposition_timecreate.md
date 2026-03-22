# TimeCreate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ TimeCreate | [](imtposition_externalid.md "ExternalID") [](imtposition_timeupdate.md "TimeUpdate") |
| --- | --- | --- |
| --- | --- |

IMTPosition::TimeCreate
Get position creation time.
C++
INT64 IMTPosition::TimeCreate() const  
---  
.NET (Gateway/Manager API)
long CIMTPosition.TimeCreate()  
---  
Return Value
Date and time of position creation, in seconds that have elapsed since 01.01.1970.
IMTPosition::TimeCreate
Position creation time.
C++
MTAPIRES IMTPosition::TimeCreate( const INT64 time // Creation time )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPosition.TimeCreate( long time // Creation time )  
---  
Parameters
time
[in] Date and time of position creation, in seconds that have elapsed since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
If the value of this field is specified, the [IMTPosition::TimeCreateMsc](imtposition_timecreatemsc.md "TimeCreateMsc") value will be filled in automatically.