# HolidaySubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Holidays ](imtmanagerapi_config_holiday.md "Holidays")/ HolidaySubscribe | [](imtmanagerapi_holidaycreate.md "HolidayCreate") [](imtmanagerapi_holidayunsubscribe.md "HolidayUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::HolidaySubscribe
Subscribe to events associated with the configuration of holidays.
C++
MTAPIRES IMTManagerAPI::HolidaySubscribe( IMTConHolidaySink* sink // A pointer to the IMTConHolidaySink object )  
---  
.NET
MTRetCode CIMTManagerAPI.HolidaySubscribe( CIMTConHolidaySink sink // CIMTConHolidaySink object )  
---  
Python
ManagerAPI.HolidaySubscribe( sink # IMTConHolidaySink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConHolidaySink](imtconholidaysink.md "IMTConHolidaySink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConHolidaySink](imtconholidaysink.md "IMTConHolidaySink") cannot subscribe to events twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
To receive [IMTConHolidaySink::OnHolidaySync](imtconholidaysink_onholidaysync.md "OnHolidaySync") events, subscribe before calling the [IMTManagerAPI::Connect](imtmanagerapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTManagerAPI::HolidayUnsubscribe](imtmanagerapi_holidayunsubscribe.md "HolidayUnsubscribe") or until the administrator interface is deleted using the [IMTManagerAPI::Release](imtmanagerapi_release.md "Release") method.
To receive events connected with time holiday changes, the pumping mode [IMTManagerAPI::PUMP_MODE_HOLIDAYS](imtmanagerapi_enpumpmodes.md "Pumping Mode") must be enabled.