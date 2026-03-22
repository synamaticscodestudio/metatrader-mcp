# Allocate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Common Functions ](imtgatewayapi_common.md "Common Functions")/ Allocate | [](imtgatewayapi_common.md "Common Functions") [](imtgatewayapi_free.md "Free") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::Allocate
Memory allocation by an application. It is paired to the [IMTGatewayAPI::Free](imtgatewayapi_free.md "Free") method.
void* IMTGatewayAPI::Allocate( const UINT bytes // Amount of allocated memory )  
---  
Parameters
bytes
[in] Amount of allocated memory in bytes.
Return Value
If successful, it returns a pointer to the allocated memory block, otherwise it returns NULL.