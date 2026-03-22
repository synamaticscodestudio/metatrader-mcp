# OrderCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Orders ](imtmanagerapi_trading_order.md "Orders")/ OrderCreateArray | [](imtmanagerapi_ordercreate.md "OrderCreate") [](imtmanagerapi_ordersubscribe.md "OrderSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OrderCreateArray
Create an object of the array of orders.
C++
IMTOrderArray* IMTManagerAPI::OrderCreateArray()  
---  
.NET
CIMTOrderArray CIMTManagerAPI.OrderCreateArray()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTOrderArray](imtorderarray.md "IMTOrderArray") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling [IMTOrderArray::Release](imtorderarray_release.md "Release") method of this object.