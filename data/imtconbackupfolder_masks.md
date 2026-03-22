# Masks (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConBackupFolder ](imtconbackupfolder.md "IMTConBackupFolder")/ Masks | [](imtconbackupfolder_folder.md "Folder") [](imtconbackupfolder_filter.md "Filter") |
| --- | --- | --- |
| --- | --- |

IMTConBackupFolder::Masks
Get a list or a wildcard pattern of files to back up.
C++
LPCWSTR IMTConBackupFolder::Masks() const  
---  
.NET (Gateway/Manager API)
string CIMTConBackupFolder.Masks()  
---  
Python (Manager API)
MTConBackupFolder.Masks  
---  
Return Value
If successful, a pointer to a string with the list or wildcard pattern is returned. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConServerBackup](imtconserverbackup.md "IMTConServerBackup") object.
To use the string after the deletion of the object (by calling the [IMTConServerBackup::Release](imtconserverbackup_release.md "Release") method of this object), you should create its copy.
IMTConBackupFolder::Masks
Set a list or a wildcard pattern of files to back up.
C++
MTAPIRES IMTConBackupFolder::Masks( LPCWSTR masks // list of files or wildcard pattern )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConBackupFolder.Masks( string masks // list of files or wildcard pattern )  
---  
Python (Manager API)
MTConBackupFolder.Masks  
---  
Parameters
path
[in] A comma separated list of backed-up files. File names can be described using wildcard patterns. If the list is specified, only listed files matching the mask are copied. Otherwise, all files from the directory will be copied.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum length of the wildcard pattern is 256 characters (with the newline character). If a string of a greater length is assigned, it will be cut to this length.