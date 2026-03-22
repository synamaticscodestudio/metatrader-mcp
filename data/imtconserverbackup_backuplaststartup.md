# BackupLastStartup (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerBackup ](imtconserverbackup.md "IMTConServerBackup")/ BackupLastStartup | [](imtconserverbackup_backuplastsync.md "BackupLastSync") [](imtconserverbackup_backuplastfull.md "BackupLastFull") |
| --- | --- | --- |
| --- | --- |

IMTConServerBackup::BackupLastStartup
Get the creation time of the last database startup copy.
C++
INT64 IMTConServerBackup::BackupLastStartup() const  
---  
.NET (Gateway/Manager API)
long CIMTConServerBackup.BackupLastStartup()  
---  
Python (Manager API)
MTConServerBackup.BackupLastStartup  
---  
Return Value
The creation time of the last database startup copy in seconds since 01.01.1970.
Note
When started, the backup server creates a [file copy](https://support.metaquotes.net/ru/docs/mt5/platform/components/backup_server/backup_server_features#file) of its databases which were synchronized with the main server in real time. This happens before synchronization with the main server in case its databases are already damaged. This enables the rollback to a previous state from the file copy if necessary.