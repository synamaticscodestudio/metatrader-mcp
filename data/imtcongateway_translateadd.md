# TranslateAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ TranslateAdd | [](imtcongateway_groupnext.md "GroupNext") [](imtcongateway_translateupdate.md "TranslateUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::TranslateAdd
Add translation settings for prices transmitted by the gateway.
C++
MTAPIRES IMTConGateway::TranslateAdd( IMTConGatewayTranslate* param // An object of price translation configuration )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.TranslateAdd( CIMTConGatewayTranslate param // An object of price translation configuration )  
---  
Python (Manager API)
MTConGateway.TranslateAdd( param # An object of price translation configuration )  
---  
Parameters
param
[in] An object of price translation configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.