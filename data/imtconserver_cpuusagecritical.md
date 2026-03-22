# CPUUsageCritical (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ CPUUsageCritical | [](imtconserver_cpuusagemax.md "CPUUsageMax") [](imtconserver_memorytotal.md "MemoryTotal") |
| --- | --- | --- |
| --- | --- |

IMTConServer::CPUUsageCritical
Get the critical level of CPU usage.
C++
UINT IMTConServer::CPUUsageCritical() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServer.CPUUsageCritical()  
---  
Python (Manager API)
MTConServer.CPUUsageCritical  
---  
Return Value
The critical level of CPU usage in percentage.
Note
The critical level is strictly defined. This method allows to respond to the critical state of the system.