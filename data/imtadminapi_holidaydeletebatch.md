# HolidayDeleteBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Holidays ](imtadminapi_config_holiday.md "Functions")/ HolidayDeleteBatch | [](imtadminapi_holidaydelete.md "HolidayDelete") [](imtadminapi_holidayshift.md "HolidayShift") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::HolidayDeleteBatch
Delete multiple holiday configurations.
C++
MTAPIRES IMTAdminAPI::HolidayDeleteBatch( IMTConHoliday**  configs, // An array of configurations const UINT config_total, // The number of configurations in the array MTAPIRES* results // An array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.HolidayDeleteBatch( CIMTConHoliday[] configs, // An array of configurations MTRetCode[] results // An array of results )  
---  
Python
AdminAPI.HolidayDeleteBatch( holidays # An array of configurations )  
---  
Parameters
configs
[in] A pointer to an array of configurations which you want to delete.
config_total
[in] The number of configurations in the 'configs' array.
results
[out] An array with the results of deletion of each configuration on the server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned. The [MT_RET_OK](retcodes_successful.md "Successful completion") response code is an indication of successful sending of changes to a server; results of applying the changes are passed in the 'results' parameter.
Further Note
A configuration can only be deleted from the applications that run on the main server. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") error code is added to the 'results' array of this object.
The key fields for searching for removed entries are date ([IMTConHoliday::Year](imtconholiday_year.md "Year"), [IMTConHoliday::Month](imtconholiday_month.md "Month"), [IMTConHoliday::Day](imtconholiday_day.md "Day")), time ([IMTConHoliday::WorkFrom](imtconholiday_workfrom.md "WorkFrom"), [IMTConHoliday::WorkTo](imtconholiday_workto.md "WorkTo")) and description ([IMTConHoliday::Description](imtconholiday_description.md "Description")).