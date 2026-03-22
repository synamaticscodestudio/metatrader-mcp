# TranslateGetSource (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ TranslateGetSource | [](imtcongateway_translateget.md "TranslateGet") [](imtcongateway_stateconnected.md "StateConnected") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::TranslateGetSource
Get a price translation setting applied to the price data transmitted by the gateway based on the specified symbol name in the data source.
C++
MTAPIRES IMTConGateway::TranslateGetSource( LPCWSTR source, // The name of the symbol on the data source IMTConGatewayTranslate* param // An object of price translation configuration ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.TranslateGetSource( string source, // The name of the symbol on the data source CIMTConGatewayTranslate param // An object of price translation configuration )  
---  
Python (Manager API)
MTConGateway.TranslateGetSource( source # The name of the symbol on the data source )  
---  
Parameters
source
[in] The name of a symbol in a data feed.
param
[out] An object of data translation configuration. The 'param' object must first be created using the [IMTAdminAPI::GatewayTranslateCreate](imtadminapi_gatewaytranslatecreate.md "GatewayTranslateCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.