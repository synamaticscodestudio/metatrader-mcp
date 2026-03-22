# RequestArrayCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Trade Requests ](imtgatewayapi_trading_request.md "Trade Requests")/ RequestArrayCreate | [](imtgatewayapi_requestcreate.md "RequestCreate") [](imtgatewayapi_requestsubscribe.md "RequestSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::RequestArrayCreate
Create an object of the array of trade requests.
C++
IMTRequestArray* IMTGatewayAPI::RequestArrayCreate()  
---  
.NET
CIMTRequestArray CIMTGatewayAPI.RequestArrayCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTRequestArray](imtrequestarray.md "IMTRequestArray") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTRequestArray::Release](imtrequestarray_release.md "Release") method of this object.