# Folder (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConBackupFolder ](imtconbackupfolder.md "IMTConBackupFolder")/ Folder | [](imtconbackupfolder_clear.md "Clear") [](imtconbackupfolder_masks.md "Masks") |
| --- | --- | --- |
| --- | --- |

IMTConBackupFolder::Folder
Get the path to the backed-up user folder.
C++
LPCWSTR IMTConBackupFolder::Folder() const  
---  
.NET (Gateway/Manager API)
string CIMTConBackupFolder.Folder()  
---  
Python (Manager API)
MTConBackupFolder.Folder  
---  
Return Value
If successful, it returns a pointer to a string with the folder path. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConServerBackup](imtconserverbackup.md "IMTConServerBackup") object.
To use the string after the deletion of the object (by calling the [IMTConServerBackup::Release](imtconserverbackup_release.md "Release") method of this object), you should create its copy.
IMTConBackupFolder::Folder
Set the path to the backed-up user folder.
C++
MTAPIRES IMTConBackupFolder::Folder( LPCWSTR folder // Path )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConBackupFolder.Folder( string folder // Path )  
---  
Python (Manager API)
MTConBackupFolder.Folder  
---  
Parameters
path
[in] Path to the backed-up user folder.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Paths are specified relative to the installation directory of the primary server.
The maximum path length is 256 characters (with the newline character). If a string of a greater length is assigned, it will be cut to this length.