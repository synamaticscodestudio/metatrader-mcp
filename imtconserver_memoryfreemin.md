# MemoryFreeMin (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ MemoryFreeMin | [](imtconserver_memoryfree.md "MemoryFree") [](imtconserver_memoryfreecritical.md "MemoryFreeCritical") |
| --- | --- | --- |
| --- | --- |

IMTConServer::MemoryFreeMin
Get the minimum available amount of free RAM and virtual memory (swap file).
C++
UINT IMTConServer::MemoryFreeMin() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServer.MemoryFreeMin()  
---  
Python (Manager API)
MTConServer.MemoryFreeMin  
---  
Return Value
The minimum amount of free RAM and virtual memory in megabytes, registered in the past 24 hours.