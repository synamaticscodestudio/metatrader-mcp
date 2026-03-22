# PointsTotal (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ PointsTotal | [](imtconserveraccess_pointsclear.md "PointsClear") [](imtconserveraccess_pointsnext.md "PointsNext") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::PointsTotal
Get the number of access points of the Access Server.
C++
UINT IMTConServerAccess::PointsTotal() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServerAccess.PointsTotal()  
---  
Python (Manager API)
MTConServerAccess.PointsTotal()  
---  
Return Value
The number of access points of the Access Server.
Note
The method is obsolete. Use [IMTConServer::PointsTotal](imtconserver_pointstotal.md "PointsTotal") instead.