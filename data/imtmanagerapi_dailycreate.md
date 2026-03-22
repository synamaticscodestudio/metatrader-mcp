# DailyCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Daily Reports ](imtmanagerapi_daily.md "Daily Report Functions")/ DailyCreate | [](imtmanagerapi_daily.md "Daily Report Functions") [](imtmanagerapi_dailycreatearray.md "DailyCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DailyCreate
Create an object of a daily report.
C++
IMTDaily* IMTManagerAPI::DailyCreate()  
---  
.NET
CIMTDaily CIMTManagerAPI.DailyCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTDaily](imtdaily.md "\\IMTDaily") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTDaily::Release](imtdaily_release.md "Release") method of this object.