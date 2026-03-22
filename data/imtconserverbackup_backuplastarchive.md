# BackupLastArchive (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerBackup ](imtconserverbackup.md "IMTConServerBackup")/ BackupLastArchive | [](imtconserverbackup_backuplastfull.md "BackupLastFull") [](imtconserverbackup_sqlexportmode.md "SQLExportMode") |
| --- | --- | --- |
| --- | --- |

IMTConServerBackup::BackupLastArchive
Get the creation time of the last [additional file copy](https://support.metaquotes.net/ru/docs/mt5/platform/administration/admin_network/network_add_edit/network_backup_server#archive_backup_period).
C++
INT64 IMTConServerBackup::BackupLastArchive() const  
---  
.NET (Gateway/Manager API)
long CIMTConServerBackup.BackupLastArchive()  
---  
Python (Manager API)
MTConServerBackup.BackupLastArchive  
---  
Return Value
The creation time of the last additional file copy in seconds since 01.01.1970.