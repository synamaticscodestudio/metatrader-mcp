# Time (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases")/ Time | [](imtserverapi_feederrestart.md "FeederRestart") [](imtserverapi_timecreate.md "TimeCreate") |
| --- | --- | --- |
| --- | --- |

Time Configuration
MetaTrader 5 Server API allows managing global time settings of a trading platform: adjust working time, retrieve and change the time zone and the address of the server for synchronizing time.
Functions described in this section allow managing the time configurations of the platform, as well subscribe and unsubscribe from events associated with its change.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [TimeCreate](imtserverapi_timecreate.md "TimeCreate") | Create an object of the time configuration. |
| [TimeSubscribe](imtserverapi_timesubscribe.md "TimeSubscribe") | Subscribe to events and hooks associated with the time configuration. |
| [TimeUnsubscribe](imtserverapi_timeunsubscribe.md "TimeUnsubscribe") | Unsubscribe from events and hooks associated with the time configuration. |
| [TimeCurrent](imtserverapi_timecurrent.md "TimeCurrent") | Get the current trading time. |
| [TimeCurrentMsc](imtserverapi_timecurrentmsc.md "TimeCurrentMsc") | Gets the current trading time with millisecond accuracy. |
| [TimeGet](imtserverapi_timeget.md "TimeGet") | Get the time configuration. |
| [TimeSet](imtserverapi_timeset.md "TimeSet") | Set the time configuration. |