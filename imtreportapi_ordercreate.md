# OrderCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Trade Databases ](imtreportapi_trade.md "Trade Database Functions") / [ Orders ](imtreportapi_order.md "Orders")/ OrderCreate | [](imtreportapi_order.md "Orders") [](imtreportapi_ordercreatearray.md "OrderCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::OrderCreate
Create an object of a trade order.
IMTOrder* IMTReportAPI::OrderCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTOrder](imtorder.md "IMTOrder") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTOrder::Release](imtorder_release.md "Release") method of this object.