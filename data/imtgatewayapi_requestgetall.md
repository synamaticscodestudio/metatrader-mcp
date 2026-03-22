# RequestGetAll (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Trade Requests ](imtgatewayapi_trading_request.md "Trade Requests")/ RequestGetAll | [](imtgatewayapi_requestget.md "RequestGet") [](imtgatewayapi_gateway_symbols.md "Gateway Symbols") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::RequestGetAll
Get all the trade requests in a queue.
C++
MTAPIRES IMTGatewayAPI::RequestGetAll( IMTRequestArray* requests // An object of the array of requests )  
---  
.NET
MTRetCode CIMTGatewayAPI.RequestGetAll( CIMTRequestArray requests // An object of the array of requests )  
---  
Parameters
requests
[out] An object of the array of requests. The requests object must first be created using the [IMTGatewaAPI::RequestArrayCreate](imtgatewayapi_requestarraycreate.md "RequestArrayCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method copies the array of trade requests in a queue to the requests object. [IMTGatewayAPI::DealerStart](imtgatewayapi_dealerstart.md "DealerStart") must be preliminarily called for making the method work.