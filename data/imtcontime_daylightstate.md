# DaylightState (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Time ](config_time.md "Time") / [ IMTConTime ](imtcontime.md "IMTConTime")/ DaylightState | [](imtcontime_daylight.md "Daylight") [](imtcontimesink.md "IMTConTimeSink") |
| --- | --- | --- |
| --- | --- |

IMTConTime::DaylightState
Get data on the presence of the daylight saving time in the platform time zone.
C++
int IMTConTime::DaylightState() const  
---  
.NET (Gateway/Manager API)
int CIMTConTime.DaylightState()  
---  
Python (Manager API)
MTConTime.DaylightState  
---  
Return Value
0 means no daylight saving time is applied in the platform time zone. Otherwise, any non-zero value is used.
When switching to daylight saving/standard time, the platform uses the dates stored in the operating system time zone. Therefore, we urge you to set the same time zone and daylight saving time for the Windows OS where the platform is installed as the ones used in the platform ([IMTConTime::TimeZone](imtcontime_timezone.md "TimeZone") and [IMTConTimeDaylight](imtcontime_daylight.md "Daylight")).
Time shift features:
  * If the daylight saving time is enabled in MetaTrader 5, the platform shifts time within an hour (during an hourly synchronization) after the time shift has occurred in Windows. The platform aligns itself with time shift values stored in the OS time zone.
  * If the daylight saving time is disabled in MetaTrader 5, the platform does not perform a time shift.
  * If the daylight saving time is enabled in MetaTrader 5 but there are no time shift values set in the OS time zone, the platform does not perform a time shift, since it has no data to align itself with.
