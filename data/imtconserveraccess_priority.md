# Priority (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ Priority | [](imtconserveraccess_clear.md "Clear") [](imtconserveraccess_prioritycurrent.md "PriorityCurrent") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::Priority
Get the base priority of the Access Server.
C++
UINT IMTConServerAccess::Priority() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServerAccess.Priority()  
---  
Python (Manager API)
MTConServerAccess.Priority  
---  
Return Value
A value from 0 (the highest priority) to 255 (the "idle" priority for creating backup access servers). The main priority values ​​are described in the [IMTConServerAccess::EnServerPriority](imtconserveraccess_enum.htm#enserverpriority) enumeration.
IMTConServerAccess::Priority
Set the base priority of the Access Server.
C++
MTAPIRES IMTConServerAccess::Priority( const UINT priority // Priority )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAccess.Priority( uint priority // Priority )  
---  
Python (Manager API)
MTConServerAccess.Priority  
---  
Parameters
priority
[in] Base priority of the Access Server. Is set by a value from 0 (the highest priority) to 255 (the "idle" priority for creating backup access servers). The main priority values ​​are described in the [IMTConServerAccess::EnServerPriority](imtconserveraccess_enum.htm#enserverpriority) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.