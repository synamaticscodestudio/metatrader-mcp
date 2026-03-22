# FoldersShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerBackup ](imtconserverbackup.md "IMTConServerBackup")/ FoldersShift | [](imtconserverbackup_foldersclear.md "FoldersClear") [](imtconserverbackup_folderstotal.md "FoldersTotal") |
| --- | --- | --- |
| --- | --- |

IMTConServerBackup::FoldersShift
Change the position of the backuped custom folder in the list.
C++
MTAPIRES IMTConServerBackup::FoldersShift( const UINT pos, // Folder position const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerBackup.FoldersShift( uint pos, // Folder position int shift // Shift )  
---  
Python (Manager API)
MTConServerBackup.FoldersShift( pos, # Folder position shift # Shift )  
---  
Parameters
pos
[in] Folder position starting from 0.
shift
[in] Shift relative to the current position. A negative value indicates shift towards the list beginning, and a negative one shifts the value towards the end.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates successful execution. Otherwise, an error code is returned.