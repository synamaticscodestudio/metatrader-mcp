# OrderUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Orders ](imtmanagerapi_trading_order.md "Orders")/ OrderUnsubscribe | [](imtmanagerapi_ordersubscribe.md "OrderSubscribe") [](imtmanagerapi_orderget.md "OrderGet") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OrderUnsubscribe
Unsubscribe from the events associated with changes in the database of orders.
C++
MTAPIRES IMTManagerAPI::OrderUnsubscribe( IMTOrderSink* sink // A pointer to the IMTOrderSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.OrderUnsubscribe( CIMTOrderSink sink // CIMTOrderSink object )  
---  
Python
TManagerAPI.OrderUnsubscribe( sink # IMTOrderSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTOrderSink](imtordersink.md "IMTOrderSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTManagerAPI::OrderSubscribe](imtmanagerapi_ordersubscribe.md "OrderSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.