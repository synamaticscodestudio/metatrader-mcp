# OrderCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Trade Databases ](imtgatewayapi_trading.md "Trade Databases")/ OrderCreate | [](imtgatewayapi_trading.md "Trade Databases") [](imtgatewayapi_positioncreate.md "PositionCreate") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::OrderCreate
Create an object of a trade order.
C++
IMTOrder* IMTGatewayAPI::OrderCreate()  
---  
.NET
CIMTOrder CIMTGatewayAPI.OrderCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTOrder](imtorder.md "IMTOrder") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTOrder::Release](imtorder_release.md "Release") method of this object.