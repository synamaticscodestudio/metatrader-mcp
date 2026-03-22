# TranslateGet (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ TranslateGet | [](imtcongateway_translatenext.md "TranslateNext") [](imtcongateway_translategetsource.md "TranslateGetSource") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::TranslateGet
Get a price translation setting applied to the price data transmitted by the gateway based on the specified symbol name in the trading platform.
C++
MTAPIRES IMTConGateway::TranslateGet( LPCWSTR symbol, // Symbol name IMTConGatewayTranslate* param // An object of price translation configuration ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.TranslateGet( string symbol, // Symbol name CIMTConGatewayTranslate param // An object of price translation configuration )  
---  
Python (Manager API)
MTConGateway.TranslateGet()  
---  
Parameters
symbol
[in] Symbol name.
param
[out] An object of price translation configuration. The 'param' object must first be created using the [IMTAdminAPI::GatewayTranslateCreate](imtadminapi_gatewaytranslatecreate.md "GatewayTranslateCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConGatewayTranslate::Symbol](imtcongatewaytranslate_symbol.md "Symbol") value is used as the symbol.