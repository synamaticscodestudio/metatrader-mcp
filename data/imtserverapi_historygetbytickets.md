# HistoryGetByTickets (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Orders ](serverapi_trading_order.md "Orders")/ HistoryGetByTickets | [](imtserverapi_historygetbyloginssymbol.md "HistoryGetByLoginsSymbol") [](imtserverapi_historyselectbygroup.md "HistorySelectByGroup") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::HistoryGetByTickets
Receive closed orders (history) related to the list of tickets.
MTAPIRES IMTServerAPI::HistoryGetByTickets( const UINT64* tickets, // Tickets const UINT tickets_total,// The number of tickets IMTOrderArray* orders // The array of orders )  
---  
Parameters
tickets
[in] The list of order tickets.
tickets_total
[in] The number of tickets in the 'tickets' array.
orders
[out] An object of the array of orders. The 'orders' object should be first created using the [IMTServerAPI::OrderCreateArray](imtserverapi_ordercreatearray.md "OrderCreateArray") method.
Returned Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies data of orders with the specified tickets to the 'orders' object.
The method cannot be called from event handlers (any IMT*Sink class methods).