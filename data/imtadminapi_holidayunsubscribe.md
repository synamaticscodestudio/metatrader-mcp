# HolidayUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Holidays ](imtadminapi_config_holiday.md "Functions")/ HolidayUnsubscribe | [](imtadminapi_holidaysubscribe.md "HolidaySubscribe") [](imtadminapi_holidayupdate.md "HolidayUpdate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::HolidayUnsubscribe
Unsubscribe from events associated with the configuration of holidays.
C++
MTAPIRES IMTAdminAPI::HolidayUnsubscribe( IMTConHolidaySink* sink // A pointer to the IMTConHolidaySink object )  
---  
.NET
MTRetCode CIMTAdminAPI.HolidayUnsubscribe( CIMTConHolidaySink sink // CIMTConHolidaySink object )  
---  
Python
AdminAPI.HolidayUnsubscribe( sink # IMTConHolidaySink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConHolidaySink](imtconholidaysink.md "IMTConHolidaySink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTAdminAPI::HolidaySubscribe](imtadminapi_holidaysubscribe.md "HolidaySubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.