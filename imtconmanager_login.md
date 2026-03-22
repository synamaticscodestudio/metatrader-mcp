# Login (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManager ](imtconmanager.md "IMTConManager")/ Login | [](imtconmanager_clear.md "Clear") [](imtconmanager_mailbox.md "Mailbox") |
| --- | --- | --- |
| --- | --- |

IMTConManager::Login
Get the login of a manager.
C++
UINT64 IMTConManager::Login() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConManager.Login()  
---  
Python (Manager API)
MTConManager.Login  
---  
Return Value
The login of a manager.
IMTConManager::Login
Set the login of a manager.
C++
MTAPIRES IMTConManager::Login( const UINT64 login // Manager's login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConManager.Login( ulong login // Manager's login )  
---  
Python (Manager API)
MTConManager.Login  
---  
Parameters
login
[in] The login of a manager.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The login must first be created in the [accounts](reference_user.md "Users") section. Such an account must be included in the [group](config_group.md "Groups") of managers or administrators.