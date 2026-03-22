# OrderGet (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ OrderGet | [](imtdaily_ordernext.md "OrderNext") [](imtdailyarray.md "IMTDailyArray") |
| --- | --- | --- |
| --- | --- |

IMTDaily::OrderGet
Get a [trade order](trading_order.md "Orders") by a ticket.
C++
MTAPIRES IMTDaily::OrderGet( UINT64 ticket, // Order ticket IMTOrder* order // An order object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.OrderGet( ulong ticket, // Order ticket CIMTOrder order // An order object )  
---  
Parameters
ticket
[in] The number (ticket) of an order.
position
[out] An object of a trade order. The 'order' object must be first created using the [IMTManagerAPI::OrderCreate](imtmanagerapi_ordercreate.md "OrderCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method copies parameters of a trade order with the specified ticket to the order object.