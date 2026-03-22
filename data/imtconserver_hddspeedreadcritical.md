# HDDSpeedReadCritical (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ HDDSpeedReadCritical | [](imtconserver_hddspeedread.md "HDDSpeedRead") [](imtconserver_hddspeedwrite.md "HDDSpeedWrite") |
| --- | --- | --- |
| --- | --- |

IMTConServer::HDDSpeedReadCritical
Get the critical speed of data reading from the hard disk.
C++
UINT IMTConServer::HDDSpeedReadCritical() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServer.HDDSpeedReadCritical()  
---  
Python (Manager API)
MTConServer.HDDSpeedReadCritical  
---  
Return Value
The critical speed of data reading from the hard disk in Mb/sec.
Note
The critical level is strictly defined. This method allows to respond to the critical state of the system.