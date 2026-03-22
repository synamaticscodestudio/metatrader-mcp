# DailyCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Daily Reports ](imtreportapi_daily.md "Daily Reports Database Functions")/ DailyCreate | [](imtreportapi_daily.md "Daily Reports Database Functions") [](imtreportapi_dailycreatearray.md "DailyCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::DailyCreate
Create an object of a daily report.
IMTDaily* IMTReportAPI::DailyCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTDaily](imtdaily.md "\\IMTDaily") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTDaily::Release](imtdaily_release.md "Release") method of this object.