# DailyCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Daily Reports ](serverapi_trading_daily.md "Daily Reports")/ DailyCreate | [](serverapi_trading_daily.md "Daily Reports") [](imtserverapi_dailycreatearray.md "DailyCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DailyCreate
Create an object of a daily report.
IMTDaily* IMTServerAPI::DailyCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTDaily](imtdaily.md "\\IMTDaily") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTDaily::Release](imtdaily_release.md "Release") method of this object.