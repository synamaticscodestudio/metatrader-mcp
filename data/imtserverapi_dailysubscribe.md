# DailySubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Daily Reports ](serverapi_trading_daily.md "Daily Reports")/ DailySubscribe | [](imtserverapi_dailycreatearray.md "DailyCreateArray") [](imtserverapi_dailyunsubscribe.md "DailyUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DailySubscribe
Subscribe to events and hooks associated with changes in the database of daily reports.
MTAPIRES IMTServerAPI::DailySubscribe( IMTDailySink* sink // A pointer to the IMTDailySink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTDailySink](imtdailysink.md "IMTDailySink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTDailySink](imtdailysink.md "IMTDailySink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::DailyUnsubscribe](imtserverapi_dailyunsubscribe.md "DailyUnsubscribe") or until the plugin is deleted.