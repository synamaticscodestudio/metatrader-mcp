# MemoryFreeCritical (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ MemoryFreeCritical | [](imtconserver_memoryfreemin.md "MemoryFreeMin") [](imtconserver_hddtotal.md "HDDTotal") |
| --- | --- | --- |
| --- | --- |

IMTConServer::MemoryFreeCritical
Get the critical level of free RAM.
C++
UINT IMTConServer::MemoryFreeCritical() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServer.MemoryFreeCritical()  
---  
Python (Manager API)
MTConServer.MemoryFreeCritical  
---  
Return Value
The critical amount of free memory in megabytes.
Note
The critical level is strictly defined. This method allows to respond to the critical state of the system.