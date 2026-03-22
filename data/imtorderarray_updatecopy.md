# UpdateCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrderArray ](imtorderarray.md "IMTOrderArray")/ UpdateCopy | [](imtorderarray_update.md "Update") [](imtorderarray_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

IMTOrderArray::UpdateCopy
Change an order at the specified position of an array by copying the parameters of a passed object of an order.
C++
MTAPIRES IMTOrderArray::UpdateCopy( const UINT  pos, // Position const IMTOrder* order // An object of a trade order )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrderArray.UpdateCopy( uint  pos, // Position CIMTOrder order // An object of a trade order )  
---  
Parameters
pos
[in] Position of an order in an array, starting with 0.
order
[in] An object of a trading order.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method copies the parameters of the order object into an object of an order at the specified position of an array.
Unlike the [IMTOrderArray::Update](imtorderarray_update.md "Update")method, calling this method does not set any additional conditions for the control of the order object, but is more resource-intensive, since an additional object is created.