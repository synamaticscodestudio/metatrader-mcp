# HistoryUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Orders ](serverapi_trading_order.md "Orders")/ HistoryUnsubscribe | [](imtserverapi_historysubscribe.md "HistorySubscribe") [](imtserverapi_historyadd.md "HistoryAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::HistoryUnsubscribe
Unsubscribe from the events and hooks associated with changes in the database of closed orders.
MTAPIRES IMTServerAPI::HistoryUnsubscribe( IMTHistorySink* sink // A pointer to the IMTHistorySink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTHistorySink](imthistorysink.md "IMTHistorySink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::HistorySubscribe](imtserverapi_historysubscribe.md "HistorySubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.