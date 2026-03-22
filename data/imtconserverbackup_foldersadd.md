# FoldersAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerBackup ](imtconserverbackup.md "IMTConServerBackup")/ FoldersAdd | [](imtconserverbackup_sqlexportlastsync.md "SQLExportLastSync") [](imtconserverbackup_foldersupdate.md "FoldersUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConServerBackup::FoldersAdd
Add a custom folder to the backup list.
C++
MTAPIRES IMTConServerBackup::FoldersAdd( IMTConBackupFolder* folder // Folder object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerBackup.FoldersAdd( CIMTConBackupFolder folder // Folder object )  
---  
Python (Manager API)
MTConServerBackup.FoldersAdd( folder # Folder object )  
---  
Parameters
folder
[in] Custom folder object [IMTConBackupFolder](imtconbackupfolder.md "IMTConBackupFolder").
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates successful execution. Otherwise, an error code is returned.