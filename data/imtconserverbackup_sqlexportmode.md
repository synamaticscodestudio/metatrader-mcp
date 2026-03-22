# SQLExportMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerBackup ](imtconserverbackup.md "IMTConServerBackup")/ SQLExportMode | [](imtconserverbackup_backuplastarchive.md "BackupLastArchive") [](imtconserverbackup_sqlexportflags.md "SQLExportFlags") |
| --- | --- | --- |
| --- | --- |

IMTConServerBackup::SQLExportMode
Gets the mode of data export to an SQL database.
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
One of the values of the [IMTConServer::EnSQLExportMode](imtconserverbackup_enum.htm#ensqlexportmode) enumeration.
IMTConServerBackup::SQLExportMode
Sets the mode of data export to an SQL database.
C++
MTAPIRES IMTConServerBackup::SQLExportMode( const UINT mode // Export mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerBackup.SQLExportMode( uint mode // Export mode )  
---  
Python (Manager API)
MTConServerBackup.BackupPeriod  
---  
Parameters
mode
[in] The [IMTConServerBackup::EnSQLExportMode](imtconserverbackup_enum.htm#ensqlexportmode) enumeration is used to pass the mode of data export to SQL.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.