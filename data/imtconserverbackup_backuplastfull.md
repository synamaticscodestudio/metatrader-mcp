# BackupLastFull (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerBackup ](imtconserverbackup.md "IMTConServerBackup")/ BackupLastFull | [](imtconserverbackup_backuplaststartup.md "BackupLastStartup") [](imtconserverbackup_backuplastarchive.md "BackupLastArchive") |
| --- | --- | --- |
| --- | --- |

IMTConServerBackup::BackupLastFull
Get the creation time of the last [file copy](https://support.metaquotes.net/ru/docs/mt5/platform/components/backup_server/backup_server_features#file) of all databases.
C++
INT64 IMTConServerBackup::BackupLastFull() const  
---  
.NET (Gateway/Manager API)
long CIMTConServerBackup.BackupLastFull()  
---  
Python (Manager API)
MTConServerBackup.BackupLastFull  
---  
Return Value
The creation time of the last full copy of the databases in seconds since 01.01.1970.