# NetworkCritical (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ NetworkCritical | [](imtconserver_networkmax.md "NetworkMax") [](imtconserver_tradeserver.md "TradeServer") |
| --- | --- | --- |
| --- | --- |

IMTConServer::NetworkCritical
Get the critical level of network usage.
C++
UINT IMTConServer::NetworkCritical() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServer.NetworkCritical()  
---  
Python (Manager API)
MTConServer.NetworkCritical  
---  
Return Value
The critical level of network usage in Kbps.
Note
The value is based on the total incoming and outgoing traffic measured on the [selected network interface](imtconserver_adapterscurrent.md "AdaptersCurrent"). This includes the traffic of all programs running on the server machine.
The critical level is strictly defined. This method allows timely responding to the critical state of the system.