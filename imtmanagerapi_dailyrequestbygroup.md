# DailyRequestByGroup (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Daily Reports ](imtmanagerapi_daily.md "Daily Report Functions")/ DailyRequestByGroup | [](imtmanagerapi_dailyrequestbylogins.md "DailyRequestByLogins") [](imtmanagerapi_dailyrequestlight.md "DailyRequestLight") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DailyRequestByGroup
Get an array of daily reports by groups and date range.
C++
MTAPIRES IMTManagerAPI::DailyRequestByGroup( LPCWSTR group, // group const INT64 from, // beginning of period const INT64 to, // end of period IMTDailyArray* daily // array of reports )  
---  
.NET
MTRetCode CIMTManagerAPI.DailyRequestByGroup( string group, // group long from, // beginning of period long to, // end of period CIMTDailyArray daily // array of reports )  
---  
Python
ManagerAPI.DailyRequestByGroup( group, # group from, # beginning of period to # end of period )  
---  
Parameters
group
[in] Groups for which the reports are requested. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using characters "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups whose names begin with 'demo', except for the group demoforex.
from
[in] The beginning of the period for which you need to get daily reports. The date is specified in seconds since 01.01.1970.
to
[in] The end of the period for which you need to get daily reports. The date is specified in seconds since 01.01.1970.
daily
[out] An object of the array of daily reports. The 'daily' object must be previously created using the [IMTManagerAPI::DailyCreateArray](imtmanagerapi_dailycreatearray.md "DailyCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies an array of daily reports for the specified groups and date range to the 'daily 'object.
The method cannot be called from event handlers (any IMT*Sink class methods).