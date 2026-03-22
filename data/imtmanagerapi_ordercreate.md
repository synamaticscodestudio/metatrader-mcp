# OrderCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Orders ](imtmanagerapi_trading_order.md "Orders")/ OrderCreate | [](imtmanagerapi_trading_order.md "Orders") [](imtmanagerapi_ordercreatearray.md "OrderCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OrderCreate
Create an object of a trade order.
C++
IMTOrder* IMTManagerAPI::OrderCreate()  
---  
.NET
CIMTOrder CIMTManagerAPI.OrderCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTOrder](imtorder.md "IMTOrder") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTOrderAPI::Release](imtorder_release.md "Release") method of this object.