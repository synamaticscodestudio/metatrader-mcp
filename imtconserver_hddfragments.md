# HDDFragments (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ HDDFragments | [](imtconserver_hddfreecritical.md "HDDFreeCritical") [](imtconserver_hddfragmentscritical.md "HDDFragmentsCritical") |
| --- | --- | --- |
| --- | --- |

IMTConServer::HDDFragments
Gets the current level of fragmentation of server files.
C++
UINT IMTConServer::HDDFragments() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServer.HDDFragments()  
---  
Python (Manager API)
MTConServer.HDDFragments  
---  
Return Value
The current level of fragmentation of server files in percentage.
Note
The fragmentation level is calculated only for the files within the server installation directory.
Disk performance is measured once a day, during [platform optimization time](imtconserver_servicetime.md "ServiceTime").