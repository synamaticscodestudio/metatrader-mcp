# HolidayNext (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Holidays ](imtreportapi_config_holiday.md "Holidays")/ HolidayNext | [](imtreportapi_holidaytotal.md "HolidayTotal") [](imtreportapi_config_group.md "Groups") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::HolidayNext
Gets a holiday configuration with the specified index.
MTAPIRES IMTReportAPI::HolidayNext( const UINT pos, // Position of the configuration IMTConHoliday* config // Holiday configuration object )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
config
[out] An object of holiday configuration. The config object must first be created using the [IMTReportAPI::HolidayCreate](imtreportapi_holidaycreate.md "HolidayCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a holiday with a specified index to the config object.