# Time (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces")/ Time | [](imtconfeedersink_onfeedersync.md "OnFeederSync") [](imtcontime.md "IMTConTime") |
| --- | --- | --- |
| --- | --- |

Time Configuration
The MetaTrader 5 API allows to manage global time settings of a trading platform: adjust working time, retrieve and change the time zone and the address of the server for synchronizing time.
The following time configuration interfaces are available:
  * [IMTConTime](imtcontime.md "IMTConTime") An interface for getting and setting the time parameters of a platform.
  * [IMTConTimeSink](imtcontimesink.md "IMTConTimeSink") An interface for handling events associated with change of time settings.

The below figure shows different elements of time configuration in the MetaTrader 5 Administrator, to help you understand the purpose of the interfaces:
The following elements are shown above:
  1. [The time zone of a platform](imtcontime_timezone.md "TimeZone").
  2. [The daylight saving time option](imtcontime_daylight.md "Daylight").
  3. [The address of a server for synchronizing time](imtcontime_timeserver.md "TimeServer").
  4. [The platform operation schedule](imtcontime_timetableget.md "TimeTableGet").
