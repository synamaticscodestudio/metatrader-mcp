# AddCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrderArray ](imtorderarray.md "IMTOrderArray")/ AddCopy | [](imtorderarray_add.md "Add") [](imtorderarray_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

IMTOrderArray::AddCopy
Add a copy of an object of a trade order at the end of an array.
C++
MTAPIRES IMTOrderArray::AddCopy( const IMTOrder* order // An order that is being added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrderArray.AddCopy( CIMTOrder order // An order that is being added )  
---  
Parameters
order
[in] An object of a trading order.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the order object and places it at the end of the array.
Unlike [IMTOrderArray::Add(IMTOrder* order)](imtorderarray_add.md "Add"), calling this method does not set any additional conditions for the control of the order object, but is more resource-intensive, since an additional object is created.
IMTOrderArray::AddCopy
Add copies of the objects of trade orders in an array.
C++
MTAPIRES IMTOrderArray::AddCopy( const IMTOrderArray* array // An array of orders that is being added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrderArray.AddCopy( CIMTOrderArray  array // An array of orders that is being added )  
---  
Parameters
array
[in] An object of the array of trade orders.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the objects of trade orders belonging to the array object, and inserts them at the end of the current array.
Unlike [IMTOrderArray::Add(IMTOrderArray* array)](imtorderarray_add.md "Add"), calling this method does not change the source array object, but is more resource-intensive, since additional objects are created.