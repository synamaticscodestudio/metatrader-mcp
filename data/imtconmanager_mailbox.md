# Mailbox (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManager ](imtconmanager.md "IMTConManager")/ Mailbox | [](imtconmanager_login.md "Login") [](imtconmanager_server.md "Server") |
| --- | --- | --- |
| --- | --- |

IMTConManager::Mailbox
Get the name of a manager's mailbox in the internal mail system.
C++
LPCWSTR IMTConManager::Mailbox() const  
---  
.NET (Gateway/Manager API)
string CIMTConManager.Mailbox()  
---  
Python (Manager API)
MTConManager.Mailbox  
---  
Return Value
If successful, it returns a pointer to a string with the name of the mailbox. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConManager](imtconmanager.md "IMTConManager") object.
To use the string after the object removal (call of the [IMTConManager::Release](imtconmanager_release.md "Release") method of this object), a copy of it should be created.
IMTConManager::Mailbox
Set the name of a manager's mailbox in the internal mail system.
C++
MTAPIRES IMTConManager::Mailbox( LPCWSTR mailbox // The name of the mailbox )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConManager.Mailbox( string mailbox // The name of the mailbox )  
---  
Python (Manager API)
MTConManager.Mailbox  
---  
Parameters
mailbox
[in] The name of a mailbox in the internal mailing system.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The length of the mailbox name is limited to 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.