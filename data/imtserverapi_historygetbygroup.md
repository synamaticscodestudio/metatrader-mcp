# HistoryGetByGroup (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Orders ](serverapi_trading_order.md "Orders")/ HistoryGetByGroup | [](imtserverapi_historyget.md "HistoryGet") [](imtserverapi_historygetbygroupsymbol.md "HistoryGetByGroupSymbol") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::HistoryGetByGroup
Request closed orders (history) related to a client group.
MTAPIRES IMTServerAPI::HistoryGetByGroup( LPCWSTR group, // Group const INT64 from, // Period from const INT64 to, // Period to IMTOrderArray* orders // The object of the orders array )  
---  
Parameters
group
[in] The group for which the orders are requested.
from
[in] The beginning of the period you want to receive orders for. The date is specified in seconds which have elapsed since 01.01.1970.
to
[in] The end of the period you want to receive orders for. The date is specified in seconds which have elapsed since 01.01.1970.
orders
[out] An object of the array of orders. The 'orders' object should be first created using the [IMTServerAPI::OrderCreateArray](imtserverapi_ordercreatearray.md "OrderCreateArray") method.
Returned Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies to the 'orders' object the data of all closed orders belonging to clients in the specified groups.
The method cannot be called from event handlers (any IMT*Sink class methods).