# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ Clear | [](imtconserver_assign.md "Assign") [](imtconserver_type.md "Type") |
| --- | --- | --- |
| --- | --- |

IMTConServer::Clear
Clear an object.
C++
MTAPIRES IMTConServer::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServer.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.