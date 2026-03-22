# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConBackupFolder ](imtconbackupfolder.md "IMTConBackupFolder")/ Clear | [](imtconbackupfolder_assign.md "Assign") [](imtconbackupfolder_folder.md "Folder") |
| --- | --- | --- |
| --- | --- |

IMTConBackupFolder::Clear
Clear an object.
C++
MTAPIRES IMTConBackupFolder::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConBackupFolder.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all field values ​and removes embedded objects.