# PriorityCurrent (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ PriorityCurrent | [](imtconserveraccess_priority.md "Priority") [](imtconserveraccess_accessflags.md "AccessFlags") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::PriorityCurrent
Get the current priority of the Access Server.
C++
UINT IMTConServerAccess::PriorityCurrent() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServerAccess.PriorityCurrent()  
---  
Python (Manager API)
MTConServerAccess.PriorityCurrent  
---  
Return Value
The current priority of the Access Server.
Note
The current priority of an Access Server is calculated based on its [base priority](imtconserveraccess_priority.md "Priority") and the current server load.