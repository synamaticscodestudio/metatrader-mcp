# DailyCreateArray (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Daily Reports ](serverapi_trading_daily.md "Daily Reports")/ DailyCreateArray | [](imtserverapi_dailycreate.md "DailyCreate") [](imtserverapi_dailysubscribe.md "DailySubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DailyCreateArray
Create an object of the array of daily reports.
IMTDailyArray* IMTServerAPI::DailyCreateArray()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConDailyArray](imtdailyarray.md "IMTDailyArray") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTDaily::Release](imtdailyarray_release.md "Release") method of this object.