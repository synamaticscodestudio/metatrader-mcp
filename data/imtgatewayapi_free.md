# Free (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Common Functions ](imtgatewayapi_common.md "Common Functions")/ Free | [](imtgatewayapi_allocate.md "Allocate") [](imtgatewayapi_loggerout.md "LoggerOut") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::Free
Free memory allocated earlier by [IMTGatewayAPI::Allocate](imtgatewayapi_allocate.md "Allocate"). It is used to free memory allocated by the functions and interfaces of the MetaTrader 5 Gateway API.
void IMTGatewayAPI::Free( void* ptr // Pointer to a memory block )  
---  
Parameters
ptr
[in] A pointer to the released memory block allocated earlier by [IMTGatewayAPI::Allocate](imtgatewayapi_allocate.md "Allocate").