# OrderGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Orders ](serverapi_trading_order.md "Orders")/ OrderGet | [](imtserverapi_ordercancelbatch.md "OrderCancelBatch") [](imtserverapi_ordergetbygroup.md "OrderGetByGroup") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::OrderGet
Get an open trade order by a ticket.
MTAPIRES IMTServerAPI::OrderGet( const UINT64 ticket, // Ticket IMTOrder* order // An order object )  
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
IMTServerAPI::OrderGet
Gets open orders of a client.
MTAPIRES IMTServerAPI::OrderGet( const UINT64 login, // Client login IMTOrderArray* orders // An object of the array of orders )  
---  
Parameters
login
[in] The login of the client, whose orders you need to get.
orders
[out] An object of the array of orders. The orders object must be first created using the [IMTServerAPI::OrderCreateArray](imtserverapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.