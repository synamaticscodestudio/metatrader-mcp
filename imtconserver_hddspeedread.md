# HDDSpeedRead (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ HDDSpeedRead | [](imtconserver_hddfragmentscritical.md "HDDFragmentsCritical") [](imtconserver_hddspeedreadcritical.md "HDDSpeedReadCritical") |
| --- | --- | --- |
| --- | --- |

IMTConServer::HDDSpeedRead
Get the speed of data reading from the hard disk.
C++
UINT IMTConServer::HDDSpeedRead() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServer.HDDSpeedRead()  
---  
Python (Manager API)
MTConServer.HDDSpeedRead  
---  
Return Value
The speed of data reading from the hard disk in Mb/sec.
Note
Disk performance is measured once a day, during [platform optimization time](imtconserver_servicetime.md "ServiceTime").