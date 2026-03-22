# MasterServer (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerBackup ](imtconserverbackup.md "IMTConServerBackup")/ MasterServer | [](imtconserverbackup_clear.md "Clear") [](imtconserverbackup_backuppath.md "BackupPath") |
| --- | --- | --- |
| --- | --- |

IMTConServerBackup::MasterServer
Get the ID of the server to make a backup of.
C++
UINT64 IMTConServerBackup::MasterServer() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConServerBackup.MasterServer()  
---  
Python (Manager API)
MTConServerBackup.MasterServer  
---  
Return Value
ID of the server to backup.
IMTConServerBackup::MasterServer
Set the ID of the server to make a backup of.
C++
MTAPIRES IMTConServerBackup::MasterServer( const UINT64 id // ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerBackup.MasterServer( ulong id // ID )  
---  
Python (Manager API)
MTConServerBackup.MasterServer  
---  
Parameters
id
[in] ID of the server to backup.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.