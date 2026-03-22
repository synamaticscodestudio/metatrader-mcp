# OrderSet (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ OrderSet | [](imtorder_order.md "Order") [](imtorder_externalid.md "ExternalID") |
| --- | --- | --- |
| --- | --- |

IMTOrder::OrderSet
Sets the order ticket.
C++
MTAPIRES IMTOrder::OrderSet( const UINT64 order // Order ticket )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.OrderSet( ulong  order // Order ticket )  
---  
Python
MTOrder.Order  
---  
Parameters
order
[in] Order ticket.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method should only be used for recovering databases of orders using the [IMTAdminAPI::OrderBackupRestore](imtadminapi_orderbackuprestore.md "OrderBackupRestore") method.
Do not use this method in any other functions, in which operations with tickets are performed, especially in Sever API hooks. This may corrupt the database.