# OrderCreateArray (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Trade Databases ](imtreportapi_trade.md "Trade Database Functions") / [ Orders ](imtreportapi_order.md "Orders")/ OrderCreateArray | [](imtreportapi_ordercreate.md "OrderCreate") [](imtreportapi_orderget.md "OrderGet") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::OrderCreateArray
Create an object of the array of orders.
IMTOrderArray* IMTReportAPI::OrderCreateArray()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTOrderArray](imtorderarray.md "IMTOrderArray") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling [IMTOrderArray::Release](imtorderarray_release.md "Release") method of this object.