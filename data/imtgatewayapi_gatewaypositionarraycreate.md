# GatewayPositionArrayCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Controlling Positions in External System ](imtgatewayapi_position_control.md "Controlling Positions in External System")/ GatewayPositionArrayCreate | [](imtgatewayapi_gatewayparamarraycreate.md "GatewayParamArrayCreate") [](imtgatewayapi_gatewaypositionsanswer.md "GatewayPositionsAnswer") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::GatewayPositionArrayCreate
Create an object of the array of positions.
C++
IMTPositionArray* IMTGatewayAPI::GatewayPositionArrayCreate()  
---  
.NET
CIMTPositionArray CIMTGatewayAPI.GatewayPositionArrayCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTPositionArray](imtpositionarray.md "IMTPositionArray") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTPositionArray::Release](imtpositionarray.md "IMTPositionArray") method of this object.