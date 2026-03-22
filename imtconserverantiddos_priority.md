# Priority (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAntiDDoS ](imtconserverantiddos.md "IMTConServerAntiDDoS")/ Priority | [](imtconserverantiddos_clear.md "Clear") [](imtconserverantiddos_accessmask.md "AccessMask") |
| --- | --- | --- |
| --- | --- |

IMTConServerAntiDDoS::Priority
Gets the basic priority of the Anti-DDoS server.
C++
UINT IMTConServerAntiDDoS::Priority() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServerAntiDDoS.Priority()  
---  
Python (Manager API)
MTConServerAntiDDoS.Priority  
---  
Return Value
A value from 0 (the highest priority) to 255 (the "idle" priority for creating backup Anti DDoS servers). The main priority values ​​are described in the [IMTConServerAntiDDoS::EnServerPriority](imtconserverantiddos_enum.htm#enserverpriority) enumeration.
IMTConServerAntiDDoS::Priority
Sets the basic priority of the Anti-DDoS server.
C++
MTAPIRES IMTConServerAntiDDoS::Priority( const UINT priority // Priority )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAntiDDoS.Priority( uint priority // Priority )  
---  
Python (Manager API)
MTConServerAntiDDoS.Priority  
---  
Parameters
priority
[in] The basic priority of the Anti-DDoS server. Set as a value from 0 (the highest priority) to 255 (the "idle" priority for creating backup Anti DDoS servers). The main priority values ​​are described in the [IMTConServerAntiDDoS::EnServerPriority](imtconserverantiddos_enum.htm#enserverpriority) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.