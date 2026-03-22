# DealUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Deals ](imtmanagerapi_trading_deal.md "Deals")/ DealUnsubscribe | [](imtmanagerapi_dealsubscribe.md "DealSubscribe") [](imtmanagerapi_dealrequest.md "DealRequest") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DealUnsubscribe
Unsubscribe from the events associated with changes in the database of deals.
C++
MTAPIRES IMTManagerAPI::DealUnsubscribe( IMTDealSink* sink // A pointer to the IMTDealSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.DealUnsubscribe( CIMTDealSink sink // CIMTDealSink object )  
---  
Python
ManagerAPI.DealUnsubscribe( sink # IMTDealSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTDealSink](imtdealsink.md "IMTDealSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This is a pair method to [IMTManagerAPI::DealSubscribe](imtmanagerapi_dealsubscribe.md "DealSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.