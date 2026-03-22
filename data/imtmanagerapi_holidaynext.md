# HolidayNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Holidays ](imtmanagerapi_config_holiday.md "Holidays")/ HolidayNext | [](imtmanagerapi_holidaytotal.md "HolidayTotal") [](imtmanagerapi_config_group.md "Groups") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::HolidayNext
Gets a holiday configuration with the specified index.
C++
MTAPIRES IMTManagerAPI::HolidayNext( const UINT pos, // Position of the configuration IMTConHoliday* config // Holiday configuration object )  
---  
.NET
MTRetCode CIMTManagerAPI.HolidayNext( uint pos, // Position of the configuration CIMTConHoliday obj // Holiday configuration object )  
---  
Python
ManagerAPI.HolidayNext( pos  # Position of the configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
config
[out] An object of holiday configuration. The config object must first be created using the [IMTManagerAPI::HolidayCreate](imtmanagerapi_holidaycreate.md "HolidayCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a holiday with a specified index to the config object. The method is valid only if the [IMTManagerAPI::PUMP_MODE_HOLIDAYS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.