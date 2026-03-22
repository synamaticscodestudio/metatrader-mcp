# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManagerAccess ](imtconmanageraccess.md "IMTConManagerAccess")/ Clear | [](imtconmanageraccess_assign.md "Assign") [](imtconmanageraccess_from.md "From") |
| --- | --- | --- |
| --- | --- |

IMTConManagerAccess::Clear
Clear an object.
C++
MTAPIRES IMTConManagerAccess::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConManagerAccess.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.