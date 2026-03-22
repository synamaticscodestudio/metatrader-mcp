# HDDSpeedWriteCritical (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ HDDSpeedWriteCritical | [](imtconserver_hddspeedwrite.md "HDDSpeedWrite") [](imtconserver_connectsmax.md "ConnectsMax") |
| --- | --- | --- |
| --- | --- |

IMTConServer::HDDSpeedWriteCritical
Get the critical speed of information writing on the hard disk.
C++
UINT IMTConServer::HDDSpeedWriteCritical() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServer.HDDSpeedWriteCritical()  
---  
Python (Manager API)
MTConServer.HDDSpeedWriteCritical  
---  
Return Value
The critical speed of information writing on the hard disk in Mb/sec.
Note
The critical level is strictly defined. This method allows to respond to the critical state of the system.