# HDDFree (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ HDDFree | [](imtconserver_hddtotal.md "HDDTotal") [](imtconserver_hddfreecritical.md "HDDFreeCritical") |
| --- | --- | --- |
| --- | --- |

IMTConServer::HDDFree
Get the amount of free memory on the hard disk.
C++
UINT IMTConServer::HDDFree() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServer.HDDFree()  
---  
Python (Manager API)
MTConServer.HDDFree  
---  
Return Value
Free memory on the hard disk in megabytes.
Note
The variable is measured once a minute. The state can be different between measurements.