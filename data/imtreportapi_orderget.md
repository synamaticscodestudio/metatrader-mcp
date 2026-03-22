# OrderGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Trade Databases ](imtreportapi_trade.md "Trade Database Functions") / [ Orders ](imtreportapi_order.md "Orders")/ OrderGet | [](imtreportapi_ordercreatearray.md "OrderCreateArray") [](imtreportapi_orderselect.md "OrderSelect") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::OrderGet
Get an open trade order by a ticket.
MTAPIRES IMTReportAPI::OrderGet( const UINT64 ticket, // Ticket IMTOrder* order // An order object )  
---  
Parameters
ticket
[in] The number (ticket) of an order.
order
[out] An object of a trade order. The object object must be first created using the [IMTReportAPI::OrderCreate](imtreportapi_ordercreate.md "OrderCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies data of an order with the specified ticket to the order object.
To get the orders, generation of an appropriate snapshot must be turned on in a report ([MTReportInfo::SNAPSHOT_ORDERS](mtreportinfo.htm#ensnapshots) or [MTReportInfo::SNAPSHOT_ORDERS_FULL](mtreportinfo.htm#ensnapshots)).
IMTReportAPI::OrderGet
Gets open orders of a client.
MTAPIRES IMTReportAPI::OrderGet( const UINT64 login, // Client login IMTOrderArray* orders // An object of the array of orders )  
---  
Parameters
login
[in] The login of the client, whose orders you need to get.
orders
[out] An object of the array of orders. The orders object must be first created using the [IMTReportAPI::OrderCreateArray](imtreportapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
To get the orders, generation of an appropriate snapshot must be turned on in a report ([MTReportInfo::SNAPSHOT_ORDERS](mtreportinfo.htm#ensnapshots) or [MTReportInfo::SNAPSHOT_ORDERS_FULL](mtreportinfo.htm#ensnapshots)).