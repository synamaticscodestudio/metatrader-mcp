# HolidayCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Holidays ](serverapi_config_holiday.md "Holidays")/ HolidayCreate | [](serverapi_config_holiday.md "Holidays") [](imtserverapi_holidaysubscribe.md "HolidaySubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::HolidayCreate
Create an object of the configuration of holidays.
IMTConHoliday* IMTServerAPI::HolidayCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConHoliday](imtconholiday.md "IMTConHoliday") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConHoliday::Release](imtconholiday_release.md "Release") method of this object.