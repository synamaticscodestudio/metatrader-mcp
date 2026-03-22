# RequestCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Trade Requests ](imtgatewayapi_trading_request.md "Trade Requests")/ RequestCreate | [](imtgatewayapi_trading_request.md "Trade Requests") [](imtgatewayapi_requestarraycreate.md "RequestArrayCreate") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::RequestCreate
Create an object of a trade request.
C++
IMTRequest* IMTGatewayAPI::RequestCreate()  
---  
.NET
CIMTRequest CIMTGatewayAPI.RequestCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTRequest](imtrequest.md "IMTRequest") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTRequest::Release](imtrequest_release.md "Release") method of this object.