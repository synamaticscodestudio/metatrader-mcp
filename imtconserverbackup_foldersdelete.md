# FoldersDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerBackup ](imtconserverbackup.md "IMTConServerBackup")/ FoldersDelete | [](imtconserverbackup_foldersupdate.md "FoldersUpdate") [](imtconserverbackup_foldersclear.md "FoldersClear") |
| --- | --- | --- |
| --- | --- |

IMTConServerBackup::FoldersDelete
Delete a custom folder from the backup list.
C++
MTAPIRES IMTConServerBackup::FoldersDelete( const UINT pos // Folder position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerBackup.FoldersDelete( uint pos // Folder position )  
---  
Python (Manager API)
MTConServerBackup.FoldersDelete( pos # Folder position )  
---  
Parameters
pos
[in] Folder position starting from 0.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates successful execution. Otherwise, an error code is returned.
Note
If the object is not found, the [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error code is returned.