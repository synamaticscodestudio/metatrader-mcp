# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ Clear | [](imtconserveraccess_assign.md "Assign") [](imtconserveraccess_priority.md "Priority") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::Clear
Clear an object.
C++
MTAPIRES IMTConServerAccess::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAccess.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.