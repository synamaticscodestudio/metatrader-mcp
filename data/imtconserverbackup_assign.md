# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerBackup ](imtconserverbackup.md "IMTConServerBackup")/ Assign | [](imtconserverbackup_release.md "Release") [](imtconserverbackup_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConServerBackup::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConServerBackup::Assign( const IMTConServerBackup* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerBackup.Assign( CIMTConServerBackup param // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.