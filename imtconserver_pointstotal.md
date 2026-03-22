# PointsTotal (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ PointsTotal | [](imtconserver_pointsclear.md "PointsClear") [](imtconserver_pointsnext.md "PointsNext") |
| --- | --- | --- |
| --- | --- |

IMTConServer::PointsTotal
Get the number of access points of the Access Server.
C++
UINT IMTConServer::PointsTotal() const  
---  
.NET
uint CIMTConServer.PointsTotal()  
---  
Python (Manager API)
MTConServer.PointsTotal()  
---  
Return Value
The number of access points of the Access Server.
Note
Connections from other platform components, client connections from terminals and API (for access servers) are accepted through public access points.