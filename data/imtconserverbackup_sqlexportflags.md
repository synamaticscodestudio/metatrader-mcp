# SQLExportFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerBackup ](imtconserverbackup.md "IMTConServerBackup")/ SQLExportFlags | [](imtconserverbackup_sqlexportmode.md "SQLExportMode") [](imtconserverbackup_sqlexportperiod.md "SQLExportPeriod") |
| --- | --- | --- |
| --- | --- |

IMTConServerBackup::SQLExportFlags
Getting additional settings of data export to an SQL database.
C++
UINT64 IMTConServerBackup::SQLExportFlags() const  
---  
.NET (Gateway/Manager API)
EnSQLExportFlags IMTConServerBackup.SQLExportFlags()  
---  
Python (Manager API)
MTConServerBackup.SQLExportFlags  
---  
Return Value
One of the values of the [IMTConServer::EnSQLExportFlags](imtconserverbackup_enum.htm#ensqlexportflags) enumeration.
IMTConServerBackup::SQLExportFlags
Setting additional settings of data export to an SQL database.
C++
MTAPIRES IMTConServerBackup::SQLExportFlags( const UINT64 period // Export flags )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerBackup.SQLExportFlags( EnSQLExportFlags period // Export flags )  
---  
Python (Manager API)
MTConServerBackup.SQLExportFlags  
---  
Parameters
period
[in] The [IMTConServerBackup::EnSQLExportFlags](imtconserverbackup_enum.htm#ensqlexportflags) enumeration is used for passing additional settings.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.