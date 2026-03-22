# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGatewayTranslate ](imtcongatewaytranslate.md "IMTConGatewayTranslate")/ Assign | [](imtcongatewaytranslate_release.md "Release") [](imtcongatewaytranslate_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConGatewayTranslate::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConGatewayTranslate::Assign( const IMTConGatewayTranslate* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGatewayTranslate.Assign( CIMTConGatewayTranslate param // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.