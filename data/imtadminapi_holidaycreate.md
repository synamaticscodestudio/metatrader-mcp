# HolidayCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Holidays ](imtadminapi_config_holiday.md "Functions")/ HolidayCreate | [](imtadminapi_config_holiday.md "Functions") [](imtadminapi_holidaysubscribe.md "HolidaySubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::HolidayCreate
Create an object of the configuration of holidays.
C++
IMTConHoliday* IMTAdminAPI::HolidayCreate()  
---  
.NET
CIMTConHoliday CIMTAdminAPI.HolidayCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConHoliday](imtconholiday.md "IMTConHoliday") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConHoliday::Release](imtconholiday_release.md "Release") method of this object.