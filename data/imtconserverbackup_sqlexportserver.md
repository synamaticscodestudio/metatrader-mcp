# SQLExportServer (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerBackup ](imtconserverbackup.md "IMTConServerBackup")/ SQLExportServer | [](imtconserverbackup_sqlexportperiod.md "SQLExportPeriod") [](imtconserverbackup_sqlexportlogin.md "SQLExportLogin") |
| --- | --- | --- |
| --- | --- |

IMTConServerBackup::SQLExportServer
Getting the address of the server, on which the database is installed.
C++
LPCWSTR IMTConServerBackup::BackupPeriod() const  
---  
.NET (Gateway/Manager API)
string CIMTConServerBackup.BackupPeriod()  
---  
Python (Manager API)
MTConServerBackup.BackupPeriod  
---  
Return Value
The address of the server, on which the database is installed.
IMTConServerBackup::SQLExportServer
Setting the address of the server, on which the database is installed.
C++
MTAPIRES IMTConServerBackup::SQLExportServer( LPCWSTR server // The address of the database server )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerBackup.SQLExportServer( string server // The address of the database server )  
---  
Python (Manager API)
MTConServerBackup.BackupPeriod  
---  
Parameters
server
[in] The address of the server, on which the database is installed. Address format may vary for different databases.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.