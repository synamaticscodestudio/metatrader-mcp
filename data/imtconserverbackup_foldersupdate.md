# FoldersUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerBackup ](imtconserverbackup.md "IMTConServerBackup")/ FoldersUpdate | [](imtconserverbackup_foldersadd.md "FoldersAdd") [](imtconserverbackup_foldersdelete.md "FoldersDelete") |
| --- | --- | --- |
| --- | --- |

IMTConServerBackup::FoldersUpdate
Edit a custom folder in the backup list.
C++
MTAPIRES IMTConServerBackup::FoldersUpdate( const UINT pos, // Folder position IMTConBackupFolder* folder // Folder object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerBackup.FoldersUpdate( uint pos, // Folder position CIMTConBackupFolder folder // Folder object )  
---  
Python (Manager API)
MTConServerBackup.FoldersUpdate( pos, # Folder position folder # Folder object )  
---  
Parameters
pos
[in] Position of a folder in the list starting from 0.
folder
[in] Custom folder object [IMTConBackupFolder](imtconbackupfolder.md "IMTConBackupFolder").
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates successful execution. Otherwise, an error code is returned.