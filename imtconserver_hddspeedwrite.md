# HDDSpeedWrite (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ HDDSpeedWrite | [](imtconserver_hddspeedreadcritical.md "HDDSpeedReadCritical") [](imtconserver_hddspeedwritecritical.md "HDDSpeedWriteCritical") |
| --- | --- | --- |
| --- | --- |

IMTConServer::HDDSpeedWrite
Get the speed of information writing on the hard disk.
C++
UINT IMTConServer::HDDSpeedWrite() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServer.HDDSpeedWrite()  
---  
Python (Manager API)
MTConServer.HDDSpeedWrite  
---  
Return Value
The speed of information writing on the hard disk in Mb/sec.
Note
Disk performance is measured once a day, during [platform optimization time](imtconserver_servicetime.md "ServiceTime").