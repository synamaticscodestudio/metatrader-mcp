# RequestSubscribe (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Trade Requests ](imtgatewayapi_trading_request.md "Trade Requests")/ RequestSubscribe | [](imtgatewayapi_requestarraycreate.md "RequestArrayCreate") [](imtgatewayapi_requestunsubscribe.md "RequestUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::RequestSubscribe
Subscribe to events associated with trade requests queue changes.
C++
MTAPIRES IMTGatewayAPI::RequestSubscribe( IMTRequestSink* sink // A pointer to the IMTRequestSink object )  
---  
.NET
MTRetCode CIMTGatewayAPI.RequestSubscribe( CIMTRequestSink sink // CIMTRequestSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTRequestSink](imtrequestsink.md "IMTRequestSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTRequestSink](imtrequestsink.md "IMTRequestSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTGatewayAPI::RequestUnsubscribe](imtgatewayapi_requestunsubscribe.md "RequestUnsubscribe") or until the interface is deleted by using the [IMTRequest::Release](imtrequest_release.md "Release") method.