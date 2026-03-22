# HolidayCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Holidays ](imtmanagerapi_config_holiday.md "Holidays")/ HolidayCreate | [](imtmanagerapi_config_holiday.md "Holidays") [](imtmanagerapi_holidaysubscribe.md "HolidaySubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::HolidayCreate
Create an object of the configuration of holidays.
C++
IMTConHoliday* IMTManagerAPI::HolidayCreate()  
---  
.NET
CIMTConHoliday CIMTManagerAPI.HolidayCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConHoliday](imtconholiday.md "IMTConHoliday") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConHoliday::Release](imtconholiday_release.md "Release") method of this object.