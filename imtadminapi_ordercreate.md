# OrderCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Orders ](imtadminapi_trading_order.md "Functions")/ OrderCreate | [](imtadminapi_trading_order.md "Functions") [](imtadminapi_ordercreatearray.md "OrderCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::OrderCreate
Create an object of a trade order.
C++
IMTOrder* IMTAdminAPI::OrderCreate()  
---  
.NET
CIMTOrder CIMTAdminAPI.OrderCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTOrder](imtorder.md "IMTOrder") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTOrder::Release](imtorder_release.md "Release") method of this object.