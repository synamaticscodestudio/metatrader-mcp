# OrderCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Orders ](imtadminapi_trading_order.md "Functions")/ OrderCreateArray | [](imtadminapi_ordercreate.md "OrderCreate") [](imtadminapi_orderrequest.md "OrderRequest") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::OrderCreateArray
Create an object of the array of orders.
C++
IMTOrderArray* IMTAdminAPI::OrderCreateArray()  
---  
.NET
CIMTOrderArray CIMTAdminAPI.OrderCreateArray()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTOrderArray](imtorderarray.md "IMTOrderArray") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling [IMTOrderArray::Release](imtorderarray_release.md "Release") method of this object.