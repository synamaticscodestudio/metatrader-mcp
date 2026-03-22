# TimeTableSet (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Time ](config_time.md "Time") / [ IMTConTime ](imtcontime.md "IMTConTime")/ TimeTableSet | [](imtcontime_timetableget.md "TimeTableGet") [](imtcontime_daylight.md "Daylight") |
| --- | --- | --- |
| --- | --- |

IMTConTime::TimeTableSet
Set the working time of a trading platform for a specified week and hour.
C++
MTAPIRES IMTConTime::TimeTableSet( const UINT wday, // Day of the week const UINT hour, // Hour const UINT mode // Operation mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConTime.TimeTableSet( uint wday, // Day of the week uint hour, // Hour uint mode // Operation mode )  
---  
Python (Manager API)
MTConTime.TimeTableSet( wday, # Day of the week hour, # Hour mode # Operation mode )  
---  
MTConTime.TimeTableSet( timetable # Time configuration object )  
---  
MTConTime.TimeTable()  
---  
Parameters
wday
[in] To specify the day of the week, values 0 to 6 are used. 0 - Sunday, 6 - Saturday.
hour
[in] The hour for which we set the working schedule.
mode
[in] Server working schedule. To pass the mode, the [IMTConTime::EnTimeTableMode](imtcontime_enum.htm#entimetablemode) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.