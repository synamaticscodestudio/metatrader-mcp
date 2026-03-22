# HDDFragmentsCritical (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ HDDFragmentsCritical | [](imtconserver_hddfragments.md "HDDFragments") [](imtconserver_hddspeedread.md "HDDSpeedRead") |
| --- | --- | --- |
| --- | --- |

IMTConServer::HDDFragmentsCritical
Gets the critical level of fragmentation of server files.
C++
UINT IMTConServer::HDDFragmentsCritical() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServer.HDDFragmentsCritical()  
---  
Python (Manager API)
MTConServer.HDDFragmentsCritical  
---  
Return Value
The critical level of fragmentation of server files in percentage.
Note
The critical level is strictly defined. This method allows to respond to the critical state of the system.
The fragmentation level is calculated only for the files within the server installation directory.