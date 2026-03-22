# ParameterClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ ParameterClear | [](imtcongateway_parameterdelete.md "ParameterDelete") [](imtcongateway_parametershift.md "ParameterShift") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::ParameterClear
Clear the list of gateway parameters.
C++
MTAPIRES IMTConGateway::ParameterClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.ParameterClear()  
---  
Python (Manager API)
MTConGateway.ParameterClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method clears the entire list of gateway parameters.