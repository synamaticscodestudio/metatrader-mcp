# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConBackupFolder ](imtconbackupfolder.md "IMTConBackupFolder")/ Assign | [](imtconbackupfolder_release.md "Release") [](imtconbackupfolder_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConBackupFolder::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConBackupFolder::Assign( const IMTConBackupFolder* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConBackupFolder.Assign( CIMTConBackupFolder param // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.