# HolidayUpdateBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Holidays ](imtadminapi_config_holiday.md "Functions")/ HolidayUpdateBatch | [](imtadminapi_holidayupdate.md "HolidayUpdate") [](imtadminapi_holidaydelete.md "HolidayDelete") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::HolidayUpdateBatch
Add or edit multiple holiday configurations.
C++
MTAPIRES IMTAdminAPI::HolidayUpdateBatch( IMTConHoliday**  configs, // An array of configurations const UINT config_total, // The number of configurations in the array MTAPIRES* results // An array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.HolidayUpdateBatch( CIMTConHoliday[] configs, // An array of configurations MTRetCode[] results // An array of results )  
---  
Python.NET
AdminAPI.HolidayUpdateBatch( holidays # An array of configurations )  
---  
Parameters
configs
[in] A pointer to an array of configurations which you want to add/delete.
config_total
[in] The number of configurations in the 'configs' array.
results
[out] An array with the results of applying of each configuration change on the server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned. The [MT_RET_OK](retcodes_successful.md "Successful completion") response code is an indication of successful sending of changes to a server; results of applying the changes are passed in the 'results' parameter.
Further Note
When calling the method, a check is made whether the entry already exists. If the entry already exists, it is updated, otherwise a new entry is added. The key fields for comparison are the date ([IMTConHoliday::Year](imtconholiday_year.md "Year"), [IMTConHoliday::Month](imtconholiday_month.md "Month"), [IMTConHoliday::Day](imtconholiday_day.md "Day")), time ([IMTConHoliday::WorkFrom](imtconholiday_workfrom.md "WorkFrom"), [IMTConHoliday::WorkTo](imtconholiday_workto.md "WorkTo")) and description ([IMTConHoliday::Description](imtconholiday_description.md "Description")). When you try to add a completely identical record, no changes are made, and therefore the [IMTConHolidaySink::OnHolidayUpdate](imtconholidaysink_onholidayupdate.md "OnHolidayUpdate") notification method is not called.
A configuration can only be added or updated from the applications that run on the main server. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned.
Before adding an entry, its correctness is checked. If an entry is incorrect, the [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") error code is added to the 'results' array of this entry.