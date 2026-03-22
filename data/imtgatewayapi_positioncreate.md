# PositionCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Trade Databases ](imtgatewayapi_trading.md "Trade Databases")/ PositionCreate | [](imtgatewayapi_ordercreate.md "OrderCreate") [](imtgatewayapi_trading_request.md "Trade Requests") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::PositionCreate
Create an object of a trade position.
C++
IMTPosition* IMTGatewayAPI::PositionCreate()  
---  
.NET
CIMTPosition CIMTGatewayAPI.PositionCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTPosition](imtposition.md "IMTPosition") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTPosition::Release](imtposition_release.md "Release") method of this object.