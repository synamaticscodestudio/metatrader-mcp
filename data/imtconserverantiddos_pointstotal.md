# PointsTotal (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAntiDDoS ](imtconserverantiddos.md "IMTConServerAntiDDoS")/ PointsTotal | [](imtconserverantiddos_pointsclear.md "PointsClear") [](imtconserverantiddos_pointsnext.md "PointsNext") |
| --- | --- | --- |
| --- | --- |

IMTConServerAntiDDoS::PointsTotal
Get the number of access points of the Anti DDoS protection provider.
C++
UINT IMTConServerAntiDDoS::PointsTotal() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServerAntiDDoS.PointsTotal()  
---  
Python (Manager API)
MTConServerAntiDDoS.PointsTotal()  
---  
Return Value
The number of access points.
Note
The access points should be received from your Anti DDoS protection provider. Clients will connect to the trading platform using these points.