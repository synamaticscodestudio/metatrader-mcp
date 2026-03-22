# NetworkMax (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ NetworkMax | [](imtconserver_connectscritical.md "ConnectsCritical") [](imtconserver_networkcritical.md "NetworkCritical") |
| --- | --- | --- |
| --- | --- |

IMTConServer::NetworkMax
Get the maximum level of network usage reached during the day.
C++
UINT IMTConServer::NetworkMax()  
---  
.NET (Gateway/Manager API)
uint CIMTConServer.NetworkMax()  
---  
Python (Manager API)
MTConServer.NetworkMax  
---  
Return Value
The maximum level of network usage in Kbps, registered in the past 24 hours.
Note
The value is based on the total incoming and outgoing traffic measured on the [selected network interface](imtconserver_adapterscurrent.md "AdaptersCurrent"). This includes the traffic of all programs running on the server machine.