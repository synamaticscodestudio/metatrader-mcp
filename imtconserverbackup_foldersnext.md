# FoldersNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerBackup ](imtconserverbackup.md "IMTConServerBackup")/ FoldersNext | [](imtconserverbackup_folderstotal.md "FoldersTotal") [](imtconbackupfolder.md "IMTConBackupFolder") |
| --- | --- | --- |
| --- | --- |

IMTConServerBackup::FoldersNext
Get a custom folder for which backup is enabled by index.
C++
MTAPIRES IMTConServerBackup::FoldersNext( const UINT pos, // Folder position IMTConBackupFolder* folder // Range object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerBackup.FoldersNext( uint pos, // Folder position CIMTConBackupFolder folder // Folder object )  
---  
Python (Manager API)
MTConServerBackup.FoldersNext( pos, # Folder position folder # Folder object )  
---  
Parameters
pos
[in] Folder position starting from 0.
folder
[out] Custom folder object. The object must first be created using the [IMTServerAPI::NetServerBackupFolderCreate](imtserverapi_netserverbackupfoldercreate.md "NetServerBackupFolderCreate") or [IMTAdminAPI::NetServerBackupFolderCreate](imtadminapi_netserverbackupfoldercreate.md "NetServerBackupFolderCreate") method.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates successful execution. Otherwise, an error code is returned.
Note
The method copies the description of the folder with the specified index to the folder object.