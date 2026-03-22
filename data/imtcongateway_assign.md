# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ Assign | [](imtcongateway_release.md "Release") [](imtcongateway_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConGateway::Assign( const IMTConGateway* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.Assign( CIMTConGateway param // Source object )  
---  
Parameters
param
Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.