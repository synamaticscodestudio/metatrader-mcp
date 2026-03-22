# Server (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManager ](imtconmanager.md "IMTConManager")/ Server | [](imtconmanager_mailbox.md "Mailbox") [](imtconmanager_limitlogs.md "LimitLogs") |
| --- | --- | --- |
| --- | --- |

IMTConManager::Server
Get the ID of the trade server, to which the manager belongs.
C++
UINT64 IMTConManager::Server() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConManager.Server()  
---  
Python (Manager API)
MTConManager.Server  
---  
Return Value
The ID of the trade server, to which the manager belongs.
Note
Binding of a manager to a server is defined by the binding of a group, in which the manager account is created.
A manager can work only with the account groups that belong to the server, to which the manager is bound.