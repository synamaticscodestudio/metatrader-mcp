# DailyRequestLight (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Daily Reports ](imtmanagerapi_daily.md "Daily Report Functions")/ DailyRequestLight | [](imtmanagerapi_dailyrequestbygroup.md "DailyRequestByGroup") [](imtmanagerapi_dailyrequestlightbylogins.md "DailyRequestLightByLogins") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DailyRequestLight
Get an array of lightweight daily reports by the login and date range. Unlike full daily reports, lightweight reports do not include open client orders and positions.
C++
MTAPIRES IMTManagerAPI::DailyRequestLight( const UINT64 login, // Login const INT64 from, // Beginning of period const INT64 to, // End of period IMTDailyArray* daily // Reports array )  
---  
.NET
MTRetCode CIMTManagerAPI.DailyRequestLight( ulong login, // Login long from, // Beginning of period long to, // End of period CIMTDailyArray daily // Reports array )  
---  
Python
ManagerAPI.DailyRequestLight( login, # Login from, # Beginning of period to # End of period )  
---  
Parameters
login
[in] The login of the client, whose daily report you need to get.
from
[in] The beginning of the period for which you need to get daily reports. The date is specified in seconds that have elapsed since 01.01.1970.
to
[in] The end of the period for which you need to get daily reports. The date is specified in seconds that have elapsed since 01.01.1970.
daily
[out] An object of the array of light daily reports. The daily object must be first created using the [IMTManagerAPI::DailyCreateArray](imtmanagerapi_dailycreatearray.md "DailyCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method copies an array of light daily reports by the specified login and date range to the daily object.
This method is less resource consuming comparing to [IMTManagerAPI::DailyRequest](imtmanagerapi_dailyrequest.md "DailyRequest").
This method cannot be called from event handlers (any methods of IMT*Sink classes).