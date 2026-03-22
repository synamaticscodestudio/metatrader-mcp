# MemoryFree (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ MemoryFree | [](imtconserver_memorytotal.md "MemoryTotal") [](imtconserver_memoryfreemin.md "MemoryFreeMin") |
| --- | --- | --- |
| --- | --- |

IMTConServer::MemoryFree
Get the amount of free RAM.
C++
UINT IMTConServer::MemoryFree() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServer.MemoryFree()  
---  
Python (Manager API)
MTConServer.MemoryFree  
---  
Return Value
The amount of free memory in megabytes.
Note
The variable is measured once a minute. The state can be different between measurements.