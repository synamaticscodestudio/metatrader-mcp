# BackupLastSync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerBackup ](imtconserverbackup.md "IMTConServerBackup")/ BackupLastSync | [](imtconserverbackup_backupflags.md "BackupFlags") [](imtconserverbackup_backuplaststartup.md "BackupLastStartup") |
| --- | --- | --- |
| --- | --- |

IMTConServerBackup::BackupLastSync
Get the time of the last data synchronization with the primary server.
C++
INT64 IMTConServerBackup::BackupLastSync() const  
---  
.NET (Gateway/Manager API)
long CIMTConServerBackup.BackupLastSync()  
---  
Python (Manager API)
MTConServerBackup.BackupLastSync  
---  
Return Value
The time of the last data synchronization in seconds since 01.01.1970. 0 indicates that the data is not synchronized. You can additionally check the connection status to the server using [IMTConClusterState::Connected](imtconclusterstate_connected.md "Connected").