# HDDTotal (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ HDDTotal | [](imtconserver_memoryfreecritical.md "MemoryFreeCritical") [](imtconserver_hddfree.md "HDDFree") |
| --- | --- | --- |
| --- | --- |

IMTConServer::HDDTotal
Get the total volume of the hard disk.
C++
UINT IMTConServer::HDDTotal() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServer.HDDTotal()  
---  
Python (Manager API)
MTConServer.HDDTotal  
---  
Return Value
Total volume of a hard disk in megabytes.
Note
The variable is measured once a minute. The state can be different between measurements.