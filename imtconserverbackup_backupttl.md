# BackupTTL (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerBackup ](imtconserverbackup.md "IMTConServerBackup")/ BackupTTL | [](imtconserverbackup_backupperiod.md "BackupPeriod") [](imtconserverbackup_backupflags.md "BackupFlags") |
| --- | --- | --- |
| --- | --- |

IMTConServerBackup::BackupTTL
Get the period of backup keeping.
C++
UINT IMTConServerBackup::BackupTTL() const  
---  
.NET (Gateway/Manager API)
EnBackupTTL CIMTConServerBackup.BackupTTL()  
---  
Python (Manager API)
MTConServerBackup.BackupTTL  
---  
Return Value
A value of the [IMTConServerBackup::EnBackupTTL](imtconserverbackup_enum.htm#enbackupttl) enumeration.
IMTConServerBackup::BackupTTL
Set the period of backup keeping.
C++
MTAPIRES IMTConServerBackup::BackupTTL( const UINT period // Time to keep backups )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerBackup.BackupTTL( EnBackupTTL  period // Time to keep backups )  
---  
Python (Manager API)
MTConServerBackup.BackupTTL  
---  
Parameters
period
[in] Backup storing period is passed using the [IMTConServerBackup::EnBackupTTL](imtconserverbackup_enum.htm#enbackupttl) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.