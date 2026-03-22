# BackupFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerBackup ](imtconserverbackup.md "IMTConServerBackup")/ BackupFlags | [](imtconserverbackup_backupttl.md "BackupTTL") [](imtconserverbackup_backuplastsync.md "BackupLastSync") |
| --- | --- | --- |
| --- | --- |

IMTConServerBackup::BackupFlags
Gets backup flags.
C++
UINT64 IMTConServerBackup::BackupFlags() const  
---  
.NET (Gateway/Manager API)
EnBackupFlags IMTConServerBackup::BackupFlags()  
---  
Python (Manager API)
MTConServerBackup.BackupLastSync  
---  
Return Value
A value from the [IMTConServerBackup::EnBackupFlags](imtconserverbackup_enum.htm#enbackupflags) enumeration.
IMTConServerBackup::BackupFlags
Sets backup flags.
C++
MTAPIRES IMTConServerBackup::BackupFlags( const UINT64 flags // Backup flags )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerBackup.BackupFlags( EnBackupFlags flags // Backup flags )  
---  
Python (Manager API)
MTConServerBackup.BackupLastSync  
---  
Parameters
flags
[in] Backup flags are passed using the [IMTConServerBackup::EnBackupFlags](imtconserverbackup_enum.htm#enbackupflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.