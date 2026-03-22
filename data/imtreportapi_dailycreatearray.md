# DailyCreateArray (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Daily Reports ](imtreportapi_daily.md "Daily Reports Database Functions")/ DailyCreateArray | [](imtreportapi_dailycreate.md "DailyCreate") [](imtreportapi_dailyget.md "DailyGet") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::DailyCreateArray
Create an object of the array of daily reports.
IMTDailyArray* IMTReportAPI::DailyCreateArray()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConDailyArray](imtdailyarray.md "IMTDailyArray") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTDailyArray::Release](imtdailyarray_release.md "Release") method of this object.