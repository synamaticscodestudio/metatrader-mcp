# GatewayOrderArrayCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Controlling Orders in External System ](imtgatewayapi_order_control.md "Controlling Orders in External System")/ GatewayOrderArrayCreate | [](imtgatewayapi_order_control.md "Controlling Orders in External System") [](imtgatewayapi_gatewayordersanswer.md "GatewayOrdersAnswer") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::GatewayOrderArrayCreate
Create an object of the array of positions.
C++
IMTOrderArray* IMTGatewayAPI::GatewayOrderArrayCreate()  
---  
.NET
CIMTOrderArray CIMTGatewayAPI.GatewayOrderArrayCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTOrderArray](imtorderarray.md "IMTOrderArray") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling [IMTOrderArray::Release](imtorderarray_release.md "Release") method of this object.