# RequestSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Activity ](imtmanagerapi_trade_operations.md "Trading Functions") / [ Trade Requests ](imtmanagerapi_trading_request.md "Trade Requests")/ RequestSubscribe | [](imtmanagerapi_requestcreatearray.md "RequestCreateArray") [](imtmanagerapi_requestunsubscribe.md "RequestUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::RequestSubscribe
Subscribe to events associated with trade requests queue changes.
C++
MTAPIRES IMTManagerAPI::RequestSubscribe( IMTRequestSink* sink // A pointer to the IMTRequestSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.RequestSubscribe( CIMTRequestSink sink // CIMTRequestSink object )  
---  
Python
ManagerAPI.RequestSubscribe( sink # IMTRequestSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTRequestSink](imtrequestsink.md "IMTRequestSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTRequestSink](imtrequestsink.md "IMTRequestSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
To receive [IMTRequestSink::OnRequestSync](imtrequestsink_onrequestsync.md "OnRequestSync") events, subscribe before calling the [IMTManagerAPI::Connect](imtmanagerapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTManagerAPI::RequestUnsubscribe](imtmanagerapi_requestunsubscribe.md "RequestUnsubscribe") or until the administrator interface is deleted using the [IMTManagerAPI::Release](imtmanagerapi_release.md "Release") method.