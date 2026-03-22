# OrderCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Orders ](serverapi_trading_order.md "Orders")/ OrderCreate | [](serverapi_trading_order.md "Orders") [](imtserverapi_ordercreatearray.md "OrderCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::OrderCreate
Create an object of a trade order.
IMTOrder* IMTServerAPI::OrderCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTOrder](imtorder.md "IMTOrder") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTOrder:Release](imtorder_release.md "Release") method of this object.