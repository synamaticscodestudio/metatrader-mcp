# SQLExportFolder (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerBackup ](imtconserverbackup.md "IMTConServerBackup")/ SQLExportFolder | [](imtconserverbackup_sqlexportpassword.md "SQLExportPassword") [](imtconserverbackup_sqlexportlastsync.md "SQLExportLastSync") |
| --- | --- | --- |
| --- | --- |

IMTConServerBackup::SQLExportFolder
Getting the name of the SQL database, to which data is exported.
C++
LPCWSTR IMTConServerBackup::SQLExportFolder() const  
---  
.NET (Gateway/Manager API)
string CIMTConServerBackup.SQLExportFolder()  
---  
Python (Manager API)
MTConServerBackup.SQLExportFolder  
---  
Return Value
The name of the SQL database, to which data is exported.
IMTConServerBackup::SQLExportFolder
Setting the name of the SQL database, to which data is exported.
C++
MTAPIRES IMTConServerBackup::SQLExportFolder( LPCWSTR folder // The name of the database )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerBackup.SQLExportFolder( string folder // The name of the database )  
---  
Python (Manager API)
MTConServerBackup.SQLExportFolder  
---  
Parameters
folder
[in] The name of the SQL database, to which data is exported.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
A database should be created in advance.