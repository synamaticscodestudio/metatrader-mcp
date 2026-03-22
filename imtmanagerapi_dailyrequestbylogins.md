# DailyRequestByLogins (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Daily Reports ](imtmanagerapi_daily.md "Daily Report Functions")/ DailyRequestByLogins | [](imtmanagerapi_dailyrequest.md "DailyRequest") [](imtmanagerapi_dailyrequestbygroup.md "DailyRequestByGroup") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DailyRequestByLogins
Get an array of daily reports by the list of logins and date range.
C++
MTAPIRES IMTManagerAPI::DailyRequestByLogins( const UINT64 logins, // logins const UINT logins_total, // number of logins const INT64 from, // beginning of period const INT64 to, // end of period IMTDailyArray* daily // array of report )  
---  
.NET
MTRetCode CIMTManagerAPI.DailyRequestByLogins( ulong logins, // logins long from, // beginning of period long to, // end of period CIMTDailyArray daily // array of reports )  
---  
Python
ManagerAPI.DailyRequestByLogins( logins, # logins from, # beginning of period to # end of period )  
---  
Parameters
logins
[in] Array of client logins.
logins_total
[in] Number of logins in the 'logins' array.
from
[in] The beginning of the period for which you need to get daily reports. The date is specified in seconds since 01.01.1970.
to
[in] The end of the period for which you need to get daily reports. The date is specified in seconds since 01.01.1970.
daily
[out] An object of the array of daily reports. The 'daily' object must be previously created using the [IMTManagerAPI::DailyCreateArray](imtmanagerapi_dailycreatearray.md "DailyCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies an array of daily reports for the specified logins and date range to the 'daily' object.
The method cannot be called from event handlers (any IMT*Sink class methods).