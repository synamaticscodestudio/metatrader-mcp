# Daylight (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Time ](config_time.md "Time") / [ IMTConTime ](imtcontime.md "IMTConTime")/ Daylight | [](imtcontime_timetableset.md "TimeTableSet") [](imtcontime_daylightstate.md "DaylightState") |
| --- | --- | --- |
| --- | --- |

IMTConTime::Daylight
Get the mode of switching to the daylight saving time.
C++
bool IMTConTime::Daylight() const  
---  
.NET (Gateway/Manager API)
bool CIMTConTime.Daylight()  
---  
Python (Manager API)
MTConTime.Daylight  
---  
Return Value
false - DST is disabled, true - enabled.
IMTConTime::Daylight
Get the mode of switching to the daylight saving time.
C++
MTAPIRES IMTConTime::Daylight( const bool enable // DST mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConTime.Daylight( bool enable // DST mode )  
---  
Python (Manager API)
MTConTime.Daylight  
---  
Parameters
enable
[in] Dsaylight saving time mode: false - disabled, true - enabled.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.