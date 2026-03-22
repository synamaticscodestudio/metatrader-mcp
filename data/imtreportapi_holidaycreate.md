# HolidayCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Holidays ](imtreportapi_config_holiday.md "Holidays")/ HolidayCreate | [](imtreportapi_config_holiday.md "Holidays") [](imtreportapi_holidaytotal.md "HolidayTotal") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::HolidayCreate
Create an object of the configuration of holidays.
IMTConHoliday* IMTReportAPI::HolidayCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConHoliday](imtconholiday.md "IMTConHoliday") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConHoliday::Release](imtconholiday_release.md "Release") method of this object.