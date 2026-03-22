# GatewayParamArrayCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Controlling Positions in External System ](imtgatewayapi_position_control.md "Controlling Positions in External System")/ GatewayParamArrayCreate | [](imtgatewayapi_position_control.md "Controlling Positions in External System") [](imtgatewayapi_gatewaypositionarraycreate.md "GatewayPositionArrayCreate") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::GatewayParamArrayCreate
Create an object of the array of parameters.
C++
IMTConParamArray* IMTGatewayAPI::GatewayParamArrayCreate()  
---  
.NET
CIMTConParamArray CIMTGatewayAPI.GatewayParamArrayCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConParamArray](imtconparamarray.md "IMTConParamArray") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConParamArray::Release](imtconparamarray_release.md "Release") method of this object.