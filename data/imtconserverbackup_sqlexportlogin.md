# SQLExportLogin (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerBackup ](imtconserverbackup.md "IMTConServerBackup")/ SQLExportLogin | [](imtconserverbackup_sqlexportserver.md "SQLExportServer") [](imtconserverbackup_sqlexportpassword.md "SQLExportPassword") |
| --- | --- | --- |
| --- | --- |

IMTConServerBackup::SQLExportLogin
Getting the login for connecting to an SQL database.
C++
LPCWSTR IMTConServerBackup::SQLExportLogin() const  
---  
.NET (Gateway/Manager API)
string CIMTConServerBackup.SQLExportLogin()  
---  
Python (Manager API)
MTConServerBackup.SQLExportLogin  
---  
Return Value
The login for connecting to an SQL database.
IMTConServerBackup::SQLExportLogin
Setting the login for connecting to an SQL database.
C++
MTAPIRES IMTConServerBackup::SQLExportLogin( LPCWSTR login  // Login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerBackup.SQLExportLogin( string login  // Login )  
---  
Python (Manager API)
MTConServerBackup.SQLExportLogin  
---  
Parameters
login
[in] The login for connecting to an SQL database.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Notes
The account with which you are connecting, must have the permission to create/edit/delete tables and data.