# GatewayOrdersAnswer (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Controlling Orders in External System ](imtgatewayapi_order_control.md "Controlling Orders in External System")/ GatewayOrdersAnswer | [](imtgatewayapi_gatewayorderarraycreate.md "GatewayOrderArrayCreate") [](imtgatewayapi_user_control.md "Synchronizing Trading Data") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::GatewayOrdersAnswer
The method is used to display in MetaTrader 5 Administrator the client's current pending orders placed at the external trading system.
The functionality is currently under development.  
---  
MTAPIRES IMTGatewayAPI::GatewayOrdersAnswer( const MTAPIRES result, // Result const INT64* orders_time, // Order fixing time const IMTOrderArray* orders // Array of orders )  
---  
Parameters
result
[in] MT_RET_OK response code is used if data on positions has been successfully received from an external system. Otherwise, the appropriate [error code](reference_retcodes.md "Return Codes") is to be returned. 
orders_time
[in] Orders state fixing time, specified in seconds that have elapsed since 01.01.1970.
orders
[in] [An object of the array of orders](imtorderarray.md "IMTOrderArray") received from an external system.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.