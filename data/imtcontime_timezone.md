# TimeZone (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Time ](config_time.md "Time") / [ IMTConTime ](imtcontime.md "IMTConTime")/ TimeZone | [](imtcontime_clear.md "Clear") [](imtcontime_timeserver.md "TimeServer") |
| --- | --- | --- |
| --- | --- |

IMTConTime::TimeZone
Get the time zone of a server.
C++
int IMTConTime::TimeZone() const  
---  
.NET (Gateway/Manager API)
int CIMTConTime.TimeZone()  
---  
Python (Manager API)
MTConTime.TimeZone  
---  
Return Value
The time zone of a server in minutes from GMT.
Note
Examples: 0 = GMT; -60 = GMT - 1; 60 = GMT + 1.
IMTConTime::TimeZone
Set the time zone of a server.
C++
MTAPIRES IMTConTime::TimeZone( const int zone // Time zone )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConTime.TimeZone( int zone // Time zone )  
---  
Python (Manager API)
MTConTime.TimeZone  
---  
Parameters
zone
[in] The time zone of a server in minutes from GMT. For example, 0 = GMT; -60 = GMT - 1; 60 = GMT + 1.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.