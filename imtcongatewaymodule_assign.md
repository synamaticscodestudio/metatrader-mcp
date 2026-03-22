# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGatewayModule ](imtcongatewaymodule.md "IMTConGatewayModule")/ Assign | [](imtcongatewaymodule_release.md "Release") [](imtcongatewaymodule_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConGatewayModule::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConGatewayModule::Assign( const IMTConGatewayModule* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGatewayModule.Assign( CIMTConGatewayModule  param // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.