# HolidayUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Holidays ](imtmanagerapi_config_holiday.md "Holidays")/ HolidayUnsubscribe | [](imtmanagerapi_holidaysubscribe.md "HolidaySubscribe") [](imtmanagerapi_holidaytotal.md "HolidayTotal") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::HolidayUnsubscribe
Unsubscribe from events associated with the configuration of holidays.
C++
MTAPIRES IMTManagerAPI::HolidayUnsubscribe( IMTConHolidaySink* sink // A pointer to the IMTConHolidaySink object )  
---  
.NET
MTRetCode CIMTManagerAPI.HolidayUnsubscribe( CIMTConHolidaySink sink // CIMTConHolidaySink object )  
---  
Python
ManagerAPI.HolidayUnsubscribe( sink # IMTConHolidaySink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConHolidaySink](imtconholidaysink.md "IMTConHolidaySink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTManagerAPI::HolidaySubscribe](imtmanagerapi_holidaysubscribe.md "HolidaySubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.