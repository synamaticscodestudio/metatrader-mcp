# RequestUnsubscribe (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Trade Requests ](imtgatewayapi_trading_request.md "Trade Requests")/ RequestUnsubscribe | [](imtgatewayapi_requestsubscribe.md "RequestSubscribe") [](imtgatewayapi_requesttotal.md "RequestTotal") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::RequestUnsubscribe
Unsubscribe from events associated with requests queue changes.
C++
MTAPIRES IMTGatewayAPI::RequestUnsubscribe( IMTRequestSink* sink // A pointer to the IMTRequestSink object )  
---  
.NET
MTRetCode CIMTGatewayAPI.RequestUnsubscribe( CIMTRequestSink sink // CIMTRequestSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTRequestSink](imtrequestsink.md "IMTRequestSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTGatewayAPI::RequestSubscribe](imtgatewayapi_requestsubscribe.md "RequestSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.