# OrderNext (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ OrderNext | [](imtdaily_ordertotal.md "OrderTotal") [](imtdaily_orderget.md "OrderGet") |
| --- | --- | --- |
| --- | --- |

IMTDaily::OrderNext
Get a [trade order](trading_order.md "Orders") by the index.
C++
MTAPIRES IMTDaily::OrderNext( const UINT pos, // Position in the list IMTOrder* order // An order object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.OrderNext( uint pos, // Position in the list CIMTOrder order // An order object )  
---  
Parameters
pos
[in] Position of a trade order, starting with 0.
order
[out] An object of a trade order. The 'order' object must be first created using the [IMTManagerAPI::OrderCreate](imtmanagerapi_ordercreate.md "OrderCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method copies parameters of a trade order with the specified index to the order object.