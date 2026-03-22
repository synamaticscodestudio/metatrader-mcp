# HolidayUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Holidays ](serverapi_config_holiday.md "Holidays")/ HolidayUnsubscribe | [](imtserverapi_holidaysubscribe.md "HolidaySubscribe") [](imtserverapi_holidayadd.md "HolidayAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::HolidayUnsubscribe
Unsubscribe from events and hooks associated with the configuration of holidays.
MTAPIRES IMTServerAPI::HolidayUnsubscribe( IMTConHolidaySink* sink // A pointer to the IMTConHolidaySink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConHolidaySink](imtconholidaysink.md "IMTConHolidaySink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::HolidaySubscribe](imtserverapi_holidaysubscribe.md "HolidaySubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.