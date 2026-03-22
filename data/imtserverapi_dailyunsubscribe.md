# DailyUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Daily Reports ](serverapi_trading_daily.md "Daily Reports")/ DailyUnsubscribe | [](imtserverapi_dailysubscribe.md "DailySubscribe") [](imtserverapi_dailyget.md "DailyGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DailyUnsubscribe
Unsubscribe from the events and hooks associated with changes in the database of daily reports.
MTAPIRES IMTServerAPI::DailyUnsubscribe( IMTDailySink* sink // A pointer to the IMTDailySink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTDailySink](imtdailysink.md "IMTDailySink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a paid method to [IMTServerAPI::DailySubscribe](imtserverapi_dailysubscribe.md "DailySubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.