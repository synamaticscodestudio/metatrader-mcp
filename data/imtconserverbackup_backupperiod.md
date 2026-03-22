# BackupPeriod (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerBackup ](imtconserverbackup.md "IMTConServerBackup")/ BackupPeriod | [](imtconserverbackup_backupfulltime.md "BackupFullTime") [](imtconserverbackup_backupttl.md "BackupTTL") |
| --- | --- | --- |
| --- | --- |

IMTConServerBackup::BackupPeriod
Get the frequency of backup creation.
C++
UINT IMTConServerBackup::BackupPeriod() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServerBackup.BackupPeriod()  
---  
Python (Manager API)
MTConServerBackup.BackupPeriod  
---  
Return Value
A value of the [IMTConServer::EnBackupPeriod](imtconserverbackup_enum.htm#enbackupperiod) enumeration.
IMTConServerBackup::BackupPeriod
Set the frequency of backup creation.
C++
MTAPIRES IMTConServerBackup::BackupPeriod( const UINT period // Frequency of backup creation )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerBackup.BackupPeriod( uint period // Frequency of backup creation )  
---  
Python (Manager API)
MTConServerBackup.BackupPeriod  
---  
Parameters
period
[in] The frequency of backup creation is passed using the [IMTConServerBackup::EnBackupPeriod](imtconserverbackup_enum.htm#enbackupperiod) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.