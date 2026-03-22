# ParameterAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ ParameterAdd | [](imtcongateway_timeoutattempts.md "TimeoutAttempts") [](imtcongateway_parameterupdate.md "ParameterUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::ParameterAdd
Add a gateway parameter.
C++
MTAPIRES IMTConGateway::ParameterAdd( IMTConParam* param // An object of the gateway parameter )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.ParameterAdd( CIMTConParam param // An object of the gateway parameter )  
---  
Python (Manager API)
MTConGateway.ParameterAdd( param # An object of the gateway parameter )  
---  
Parameters
param
[in] An object of the gateway parameter.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.