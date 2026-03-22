# HistorySubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Orders ](serverapi_trading_order.md "Orders")/ HistorySubscribe | [](imtserverapi_orderselectbylogins.md "OrderSelectByLogins") [](imtserverapi_historyunsubscribe.md "HistoryUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::HistorySubscribe
Subscribe to events and hooks associated with changes in the database of closed orders.
MTAPIRES IMTServerAPI::HistorySubscribe( IMTHistorySink* sink // A pointer to the IMTHistorySink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTHistorySink](imthistorysink.md "IMTHistorySink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTHistorySink](imthistorysink.md "IMTHistorySink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::HistoryUnsubscribe](imtserverapi_historyunsubscribe.md "HistoryUnsubscribe") or until the plugin is deleted.