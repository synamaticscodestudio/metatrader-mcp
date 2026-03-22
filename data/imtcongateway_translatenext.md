# TranslateNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ TranslateNext | [](imtcongateway_translatetotal.md "TranslateTotal") [](imtcongateway_translateget.md "TranslateGet") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::TranslateNext
Get a gateway's price translation setting by the index.
C++
MTAPIRES IMTConGateway::TranslateNext( const UINT pos, // Position of a gateway IMTConGatewayTranslate* param // An object of price translation configuration ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.TranslateNext( uint pos, // Position of a gateway CIMTConGatewayTranslate param // An object of price translation configuration )  
---  
Python (Manager API)
MTConGateway.TranslateNext( pos # Position of a gateway )  
---  
Parameters
pos
[in] Position of the gateway, starting with 0.
param
[out] An object of price translation setting. The 'param' object must first be created using the [IMTAdminAPI::GatewayTranslateCreate](imtadminapi_gatewaytranslatecreate.md "GatewayTranslateCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.