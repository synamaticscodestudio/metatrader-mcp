# HolidayTotal (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Holidays ](imtmanagerapi_config_holiday.md "Holidays")/ HolidayTotal | [](imtmanagerapi_holidayunsubscribe.md "HolidayUnsubscribe") [](imtmanagerapi_holidaynext.md "HolidayNext") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::HolidayTotal
The total number of configurations of holidays available in the platform.
C++
UINT IMTManagerAPI::HolidayTotal()  
---  
.NET
uint CIMTManagerAPI.HolidayTotal()  
---  
Python
ManagerAPI.HolidayTotal()  
---  
Return Value
The number of configurations of holidays in the trading platform.
Note
The method is valid only if the [IMTManagerAPI::PUMP_MODE_HOLIDAYS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.