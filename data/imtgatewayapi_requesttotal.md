# RequestTotal (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Trade Requests ](imtgatewayapi_trading_request.md "Trade Requests")/ RequestTotal | [](imtgatewayapi_requestunsubscribe.md "RequestUnsubscribe") [](imtgatewayapi_requestnext.md "RequestNext") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::RequestTotal
Get the total amount of trade requests in a requests queue.
C++
UINT IMTGatewayAPI::RequestTotal()  
---  
.NET
uint CIMTGatewayAPI.RequestTotal()  
---  
Return Value
Total amount of trade requests in a requests queue.
Note
[IMTGatewayAPI::DealerStart](imtgatewayapi_dealerstart.md "DealerStart") must be preliminarily called for making this method work.