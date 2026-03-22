# Holidays (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases")/ Holidays | [](imtserverapi_timeset.md "TimeSet") [](imtserverapi_holidaycreate.md "HolidayCreate") |
| --- | --- | --- |
| --- | --- |

Holiday Configuration
Using the functions and interfaces described in this section, you can add holidays to the work timetable of the server, both for groups of symbols and for each symbol individually. On holidays, clients can connect, view charts and history of trades, but cannot trade.
Functions described in this section allow managing the holidays configuration, as well subscribe and unsubscribe from events associated with its change.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [HolidayCreate](imtserverapi_holidaycreate.md "HolidayCreate") | Create an object of the configuration of holidays. |
| [HolidaySubscribe](imtserverapi_holidaysubscribe.md "HolidaySubscribe") | Subscribe to events and hooks associated with the configuration of holidays. |
| [HolidayUnsubscribe](imtserverapi_holidayunsubscribe.md "HolidayUnsubscribe") | Unsubscribe from events and hooks associated with the configuration of holidays. |
| [HolidayAdd](imtserverapi_holidayadd.md "HolidayAdd") | Add or update a holiday configuration. |
| [HolidayDelete](imtserverapi_holidaydelete.md "HolidayDelete") | Delete a holiday configuration by the index. |
| [HolidayShift](imtserverapi_holidayshift.md "HolidayShift") | Changes the position of a holiday configuration in the list. |
| [HolidayTotal](imtserverapi_holidaytotal.md "HolidayTotal") | The total number of configurations of holidays available in the platform. |
| [HolidayNext](imtserverapi_holidaynext.md "HolidayNext") | Gets a holiday configuration with the specified index. |