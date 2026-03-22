# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerBackup ](imtconserverbackup.md "IMTConServerBackup")/ Clear | [](imtconserverbackup_assign.md "Assign") [](imtconserverbackup_masterserver.md "MasterServer") |
| --- | --- | --- |
| --- | --- |

IMTConServerBackup::Clear
Clear an object.
C++
MTAPIRES IMTConServerBackup::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerBackup.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.