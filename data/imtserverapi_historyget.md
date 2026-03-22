# HistoryGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Orders ](serverapi_trading_order.md "Orders")/ HistoryGet | [](imtserverapi_historydeletebatch.md "HistoryDeleteBatch") [](imtserverapi_historygetbygroup.md "HistoryGetByGroup") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::HistoryGet
Get a closed trade order by a ticket.
MTAPIRES IMTServerAPI::HistoryGet( const UINT64 ticket, // Ticket IMTOrder* order // An order object )  
---  
Parameters
ticket
[in] The number (ticket) of an order.
order
[out] An object of a trade order. The order object must be first created using the [IMTServerAPI::OrderCreate](imtserverapi_ordercreate.md "OrderCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies data of an order with the specified ticket to the order object.
IMTServerAPI::HistoryGet
Get closed orders of a client in the specified date range.
MTAPIRES IMTServerAPI::HistoryGet( const INT64 from, // Beginning of period const INT64 to, // End of period const UINT64 login, // Login IMTOrderArray* orders // Array of orders )  
---  
Parameters
login
[in] The login of the client, whose orders you need to get.
from
[in] The beginning of the period you want to receive orders for. The date is specified in seconds that have elapsed since 01.01.1970.
to
[in] The end of the period for which you need to get orders. The date is specified in seconds that have elapsed since 01.01.1970.
orders
[out] An object of the array of orders. The orders object must be first created using the [IMTServerAPI::OrderCreateArray](imtserverapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.