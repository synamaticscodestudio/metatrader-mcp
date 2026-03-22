# HolidaySubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Holidays ](serverapi_config_holiday.md "Holidays")/ HolidaySubscribe | [](imtserverapi_holidaycreate.md "HolidayCreate") [](imtserverapi_holidayunsubscribe.md "HolidayUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::HolidaySubscribe
Subscribe to events and hooks associated with the configuration of holidays.
MTAPIRES IMTServerAPI::HolidaySubscribe( IMTConHolidaySink* sink // A pointer to the IMTConHolidaySink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConHolidaySink](imtconholidaysink.md "IMTConHolidaySink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConHolidaySink](imtconholidaysink.md "IMTConHolidaySink") cannot subscribe to events twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::HolidayUnsubscribe](imtserverapi_holidayunsubscribe.md "HolidayUnsubscribe") or until the plugin is deleted.