# OrderCreateArray (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Orders ](serverapi_trading_order.md "Orders")/ OrderCreateArray | [](imtserverapi_ordercreate.md "OrderCreate") [](imtserverapi_ordersubscribe.md "OrderSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::OrderCreateArray
Create an object of the array of orders.
IMTOrderArray* IMTServerAPI::OrderCreateArray()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTOrderArray](imtorderarray.md "IMTOrderArray") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling [IMTOrderArray::Release](imtorderarray_release.md "Release") method of this object.