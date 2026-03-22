# FoldersClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerBackup ](imtconserverbackup.md "IMTConServerBackup")/ FoldersClear | [](imtconserverbackup_foldersdelete.md "FoldersDelete") [](imtconserverbackup_foldersshift.md "FoldersShift") |
| --- | --- | --- |
| --- | --- |

IMTConServerBackup::FoldersClear
Clear the list of custom folders for which backup is enabled.
C++
MTAPIRES IMTConServerBackup::FoldersClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerBackup.FoldersClear()  
---  
Python (Manager API)
MTConServerBackup.FoldersClear()  
---  
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates successful execution. Otherwise, an error code is returned.
Note
The method deletes all custom folders from the backup list.