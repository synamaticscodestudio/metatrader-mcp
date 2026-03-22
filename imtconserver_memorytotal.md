# MemoryTotal (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ MemoryTotal | [](imtconserver_cpuusagecritical.md "CPUUsageCritical") [](imtconserver_memoryfree.md "MemoryFree") |
| --- | --- | --- |
| --- | --- |

IMTConServer::MemoryTotal
Get the total amount of available RAM.
C++
UINT IMTConServer::MemoryTotal() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServer.MemoryTotal()  
---  
Python (Manager API)
MTConServer.MemoryTotal  
---  
Return Value
The total amount of RAM in megabytes.
Note
The variable is measured once a minute. The state can be different between measurements.