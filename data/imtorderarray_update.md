# Update (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrderArray ](imtorderarray.md "IMTOrderArray")/ Update | [](imtorderarray_detach.md "Detach") [](imtorderarray_updatecopy.md "UpdateCopy") |
| --- | --- | --- |
| --- | --- |

IMTOrderArray::Update
Changes an order at the specified position of an array.
C++
MTAPIRES IMTOrderArray::Update( const UINT pos, // Position IMTOrder* order // An object of a trade order )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrderArray.Update( uint pos, // Position CIMTOrder order // An object of a trade order )  
---  
Parameters
pos
[in] Position of an order in an array, starting with 0.
order
[in] An object of a trading order.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The IMTOrderArray::Update method deletes the previous element (call of [IMTOrder::Release](imtorder_release.md "Release")) and replaces it with a new one. After that, the lifetime of a new element is controlled by an array object. Thus, when deleting an array object (call of IMTOrderArray::Release), an earlier inserted object is automatically removed.
In turn, the removal of a previously inserted object will cause the pointer to it, which is stored inside an array object, to be no longer valid. Therefore, call to this pointer (including the case of array object deletion) will cause the crash of the plugin and the server.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- Example IMTOrderArray *array =api->OrderCreateArray();  IMTOrder *order1=api->OrderCreate(); IMTOrder *order2=api->OrderCreate(); //--- array->Add(order1); array->Update(0,order2); // The first element (object order1) is replaced by order2 //--- After that the order1 element will be released using Release, and the order2 lifetime will be controlled by the array  
---