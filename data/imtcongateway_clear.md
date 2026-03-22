# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ Clear | [](imtcongateway_assign.md "Assign") [](imtcongateway_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::Clear
Clear an object.
C++
MTAPIRES IMTConGateway::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.Clear()  
---  
Python (Manager API)
MTConGateway.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.