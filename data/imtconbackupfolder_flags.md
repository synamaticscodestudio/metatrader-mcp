# Flags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConBackupFolder ](imtconbackupfolder.md "IMTConBackupFolder")/ Flags | [](imtconbackupfolder_filter.md "Filter") [](imtconserveraccess.md "IMTConServerAccess") |
| --- | --- | --- |
| --- | --- |

IMTConBackupFolder::BackupFlags
Get additional folder backup settings.
C++
UINT64 IMTConBackupFolder::BackupFlags() const  
---  
.NET (Gateway/Manager API)
EnBackupFlags CIMTConBackupFolder.BackupFlags()  
---  
Python (Manager API)
MTConBackupFolder.BackupFlags  
---  
Return Value
A value of the [IMTConBackupFolder::EnBackupFlags](imtconbackupfolder_enum.htm#enbackupflags) enumeration.
IMTConBackupFolder::BackupFlags
Set additional folder backup settings.
C++
MTAPIRES IMTConBackupFolder::BackupFlags( const UINT64 flags // Backup flags )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConBackupFolder.BackupFlags( EnBackupFlags flags // Backup flags )  
---  
Python (Manager API)
MTConBackupFolder.BackupFlags  
---  
Parameters
flags
[in] The [IMTConBackupFolder::EnBackupFlags](imtconbackupfolder_enum.htm#enbackupflags) enumeration is used to pass the flags.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.