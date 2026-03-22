# HDDFreeCritical (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ HDDFreeCritical | [](imtconserver_hddfree.md "HDDFree") [](imtconserver_hddfragments.md "HDDFragments") |
| --- | --- | --- |
| --- | --- |

IMTConServer::HDDFreeCritical
Get the critical amount of free memory on the hard disk.
C++
UINT IMTConServer::HDDFreeCritical() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServer.HDDFreeCritical()  
---  
Python (Manager API)
MTConServer.HDDFreeCritical  
---  
Return Value
Critical amount of free memory on the hard disk in megabytes.
Note
The critical level is strictly defined. This method allows to respond to the critical state of the system.