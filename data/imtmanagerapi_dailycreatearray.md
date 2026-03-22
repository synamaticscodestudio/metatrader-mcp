# DailyCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Daily Reports ](imtmanagerapi_daily.md "Daily Report Functions")/ DailyCreateArray | [](imtmanagerapi_dailycreate.md "DailyCreate") [](imtmanagerapi_dailyrequest.md "DailyRequest") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DailyCreateArray
Create an object of the array of daily reports.
C++
IMTDailyArray* IMTManagerAPI::DailyCreateArray()  
---  
.NET
CIMTDailyArray CIMTManagerAPI.DailyCreateArray()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConDailyArray](imtdailyarray.md "IMTDailyArray") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTDaily::Release](imtdailyarray_release.md "Release") method of this object.