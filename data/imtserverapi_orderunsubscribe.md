# OrderUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Orders ](serverapi_trading_order.md "Orders")/ OrderUnsubscribe | [](imtserverapi_ordersubscribe.md "OrderSubscribe") [](imtserverapi_orderadd.md "OrderAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::OrderUnsubscribe
Unsubscribe from the events and hooks associated with changes in the database of open orders.
MTAPIRES IMTServerAPI::OrderUnsubscribe( IMTOrderSink* sink // A pointer to the IMTOrderSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTOrderSink](imtordersink.md "IMTOrderSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::OrderSubscribe](imtserverapi_ordersubscribe.md "OrderSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.