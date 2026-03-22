# DealSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Deals ](imtmanagerapi_trading_deal.md "Deals")/ DealSubscribe | [](imtmanagerapi_dealcreatearray.md "DealCreateArray") [](imtmanagerapi_dealunsubscribe.md "DealUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DealSubscribe
Subscribe to events associated with changes in the database of deals.
C++
MTAPIRES IMTManagerAPI::DealSubscribe( IMTDealSink* sink // A pointer to the IMTDealSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.DealSubscribe( CIMTDealSink sink // CIMTDealSink object )  
---  
Python
ManagerAPI.DealSubscribe( sink # IMTDealSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTDealSink](imtdealsink.md "IMTDealSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTDealSink](imtdealsink.md "IMTDealSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
To receive [IMTDealSink::OnDealSync](imtdealsink_ondealsync.md "OnDealSync") events, subscribe before calling the [IMTManagerAPI::Connect](imtmanagerapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTManagerAPI::DealUnsubscribe](imtmanagerapi_dealunsubscribe.md "DealUnsubscribe") or until the manager interface is deleted using the [IMTManagerAPI::Release](imtmanagerapi_release.md "Release") method.
To receive events connected with deal database changes, the pumping mode [IMTManagerAPI::PUMP_MODE_ORDERS](imtmanagerapi_enpumpmodes.md "Pumping Mode") and [IMTManagerAPI::PUMP_MODE_POSITIONS](imtmanagerapi_enpumpmodes.md "Pumping Mode") must be enabled.