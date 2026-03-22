# HolidayNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Holidays ](serverapi_config_holiday.md "Holidays")/ HolidayNext | [](imtserverapi_holidaytotal.md "HolidayTotal") [](serverapi_config_firewall.md "Firewall") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::HolidayNext
Gets a holiday configuration with the specified index.
MTAPIRES IMTServerAPI::HolidayNext( const UINT pos, // Position of the configuration IMTConHoliday* config // Holiday configuration object )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
config
[out] An object of holiday configuration. The config object must first be created using the [IMTServerAPI::HolidayCreate](imtserverapi_holidaycreate.md "HolidayCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a holiday with a specified index to the config object.