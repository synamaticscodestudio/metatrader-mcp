# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGatewayModule ](imtcongatewaymodule.md "IMTConGatewayModule")/ Clear | [](imtcongatewaymodule_assign.md "Assign") [](imtcongatewaymodule_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConGatewayModule::Clear
Clear an object.
C++
MTAPIRES IMTConGatewayModule::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGatewayModule.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.