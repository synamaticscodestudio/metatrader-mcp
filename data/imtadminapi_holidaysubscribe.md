# HolidaySubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Holidays ](imtadminapi_config_holiday.md "Functions")/ HolidaySubscribe | [](imtadminapi_holidaycreate.md "HolidayCreate") [](imtadminapi_holidayunsubscribe.md "HolidayUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::HolidaySubscribe
Subscribe to events associated with the configuration of holidays.
C++
MTAPIRES IMTAdminAPI::HolidaySubscribe( IMTConHolidaySink* sink // A pointer to the IMTConHolidaySink object )  
---  
.NET
MTRetCode CIMTAdminAPI.HolidaySubscribe( CIMTConHolidaySink sink // CIMTConHolidaySink object )  
---  
Python
AdminAPI.HolidaySubscribe( sink # IMTConHolidaySink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConHolidaySink](imtconholidaysink.md "IMTConHolidaySink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConHolidaySink](imtconholidaysink.md "IMTConHolidaySink") cannot subscribe to events twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
To receive [IMTConHolidaySink::OnHolidaySync](imtconholidaysink_onholidaysync.md "OnHolidaySync") events, subscribe before calling the [IMTAdminAPI::Connect](imtadminapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTAdminAPI::HolidayUnsubscribe](imtadminapi_holidayunsubscribe.md "HolidayUnsubscribe") or until the administrator interface is deleted using the [IMTAdminAPI::Release](imtadminapi_release.md "Release") method.