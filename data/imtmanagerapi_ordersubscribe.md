# OrderSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Orders ](imtmanagerapi_trading_order.md "Orders")/ OrderSubscribe | [](imtmanagerapi_ordercreatearray.md "OrderCreateArray") [](imtmanagerapi_orderunsubscribe.md "OrderUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OrderSubscribe
Subscribe to the events associated with changes in the database of orders.
C++
MTAPIRES IMTManagerAPI::OrderSubscribe( IMTOrderSink* sink // A pointer to the IMTOrderSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.OrderSubscribe( CIMTOrderSink sink // CIMTOrderSink object )  
---  
Python
ManagerAPI.OrderSubscribe( sink # IMTOrderSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTOrderSink](imtordersink.md "IMTOrderSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTOrderSink](imtordersink.md "IMTOrderSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
To receive [IMTOrderSink::OnOrderSync](imtordersink_onordersync.md "OnOrderSync") events, subscribe before calling the [IMTManagerAPI::Connect](imtmanagerapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTManagerAPI::OrderUnsubscribe](imtmanagerapi_orderunsubscribe.md "OrderUnsubscribe") or until the manager interface is deleted using the [IMTManagerAPI::Release](imtmanagerapi_release.md "Release") method.
To receive events connected with order database changes, the pumping mode [IMTManagerAPI::PUMP_MODE_ORDERS](imtmanagerapi_enpumpmodes.md "Pumping Mode") must be enabled.