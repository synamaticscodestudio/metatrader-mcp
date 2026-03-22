# HolidayAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Holidays ](serverapi_config_holiday.md "Holidays")/ HolidayAdd | [](imtserverapi_holidayunsubscribe.md "HolidayUnsubscribe") [](imtserverapi_holidaydelete.md "HolidayDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::HolidayAdd
Add or update a holiday configuration.
MTAPIRES IMTServerAPI::HolidayAdd( IMTConHoliday* config // Holiday configuration object )  
---  
Parameters
config
[in] An object of a holiday configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
When calling the method, a check is made whether the entry already exists. If the entry already exists, it is updated, otherwise a new entry is added. The key fields for comparison are the date ([IMTConHoliday::Year](imtconholiday_year.md "Year"), [IMTConHoliday::Month](imtconholiday_month.md "Month"), [IMTConHoliday::Day](imtconholiday_day.md "Day")), time ([IMTConHoliday::WorkFrom](imtconholiday_workfrom.md "WorkFrom"), [IMTConHoliday::WorkTo](imtconholiday_workto.md "WorkTo")) and description ([IMTConHoliday::Description](imtconholiday_description.md "Description")). When you try to add a completely identical record, no changes are made, and therefore the [IMTConHolidaySink::OnHolidayUpdate](imtconholidaysink_onholidayupdate.md "OnHolidayUpdate") notification method is not called.
A configuration can be added or updated only from the plugins that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.