# Delete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrderArray ](imtorderarray.md "IMTOrderArray")/ Delete | [](imtorderarray_addcopy.md "AddCopy") [](imtorderarray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTOrderArray::Delete
Delete an object of a trade order by its position.
C++
MTAPIRES IMTOrderArray::Delete( const UINT pos // Position of an order )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrderArray.Delete( uint pos // Position of an order )  
---  
Parameters
pos
[in] Position of an order in an array, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The object to delete will be automatically released by calling the [IMTOrder::Release](imtorder_release.md "Release") method.