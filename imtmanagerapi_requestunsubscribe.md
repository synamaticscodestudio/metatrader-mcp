# RequestUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Activity ](imtmanagerapi_trade_operations.md "Trading Functions") / [ Trade Requests ](imtmanagerapi_trading_request.md "Trade Requests")/ RequestUnsubscribe | [](imtmanagerapi_requestsubscribe.md "RequestSubscribe") [](imtmanagerapi_requesttotal.md "RequestTotal") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::RequestUnsubscribe
Unsubscribe from events associated with requests queue changes.
C++
MTAPIRES IMTManagerAPI::RequestUnsubscribe( IMTRequestSink* sink // A pointer to the IMTRequestSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.RequestUnsubscribe( CIMTRequestSink sink // CIMTRequestSink object )  
---  
Python
ManagerAPI.RequestUnsubscribe( sink # IMTRequestSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTRequestSink](imtrequestsink.md "IMTRequestSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTManagerAPI::RequestSubscribe](imtmanagerapi_subscribe.md "Subscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.