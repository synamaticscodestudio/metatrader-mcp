# HistoryDelete (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Orders ](serverapi_trading_order.md "Orders")/ HistoryDelete | [](imtserverapi_historyupdatebatcharray.md "HistoryUpdateBatchArray") [](imtserverapi_historydeletebatch.md "HistoryDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::HistoryDelete
Delete a closed trade order from the server data base.
MTAPIRES IMTServerAPI::HistoryDelete( const UINT64 ticket // The ticket of an order )  
---  
Parameters
ticket
[in] The number (ticket) of an order.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
An order can be deleted only from the plugins that run on the same trade server where the order was created. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.