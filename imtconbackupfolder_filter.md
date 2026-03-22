# Filter (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConBackupFolder ](imtconbackupfolder.md "IMTConBackupFolder")/ Filter | [](imtconbackupfolder_masks.md "Masks") [](imtconbackupfolder_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTConBackupFolder::Filter
Get a list or a wildcard pattern of files excluded from backup.
C++
LPCWSTR IMTConBackupFolder::Filter() const  
---  
.NET (Gateway/Manager API)
string CIMTConBackupFolder.Filter()  
---  
Python (Manager API)
MTConBackupFolder.Filter  
---  
Return Value
If successful, a pointer to a string with the list or wildcard pattern is returned. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConServerBackup](imtconserverbackup.md "IMTConServerBackup") object.
To use the string after the deletion of the object (by calling the [IMTConServerBackup::Release](imtconserverbackup_release.md "Release") method of this object), you should create its copy.
IMTConBackupFolder::Filter
Set a list or a wildcard pattern of files excluded from backup.
C++
MTAPIRES IMTConBackupFolder::Filter( LPCWSTR masks // list of files or wildcard pattern )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConBackupFolder.Filter( string masks // list of files or wildcard pattern )  
---  
Python (Manager API)
MTConBackupFolder.Filter  
---  
Parameters
path
[in] A comma separated list of excluded files. File names can be described using wildcard patterns. If the list is specified, only files from the list and those matching the pattern will be skipped.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum length of the wildcard pattern is 256 characters (with the newline character). If a string of a greater length is assigned, it will be cut to this length.