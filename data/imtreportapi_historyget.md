# HistoryGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Trade Databases ](imtreportapi_trade.md "Trade Database Functions") / [ Orders ](imtreportapi_order.md "Orders")/ HistoryGet | [](imtreportapi_orderselect.md "OrderSelect") [](imtreportapi_historyselect.md "HistorySelect") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::HistoryGet
Get a closed trade order by a ticket.
MTAPIRES IMTReportAPI::HistoryGet( const UINT64 ticket, // Ticket IMTOrder* order // An order object )  
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
When calling this method Report API limits the end of the request time range by the time of the report generation ([IMTReportAPI::TimeGeneration](imtreportapi_timegeneration.md "TimeGeneration")).
IMTReportAPI::HistoryGet
Get closed orders of a client in the specified date range.
MTAPIRES IMTReportAPI::HistoryGet( const UINT64 login, // Login const INT64 from, // Beginning of period const INT64 to, // End of period IMTOrderArray* orders // Array of orders )  
---  
Parameters
login
[in] The login of the client, whose orders you need to get.
from
[in] The beginning of the period you want to receive orders for. The date is specified in seconds that have elapsed since 01.01.1970.
to
[in] The end of the period for which you need to get orders. The date is specified in seconds that have elapsed since 01.01.1970.
orders
[out] An object of the array of orders. The orders object must be first created using the [IMTReportAPI::OrderCreateArray](imtreportapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
When calling this method Report API limits the end of the request time range by the time of the report generation ([IMTReportAPI::TimeGeneration](imtreportapi_timegeneration.md "TimeGeneration")).