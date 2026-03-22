# PointsClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAntiDDoS ](imtconserverantiddos.md "IMTConServerAntiDDoS")/ PointsClear | [](imtconserverantiddos_pointsdelete.md "PointsDelete") [](imtconserverantiddos_pointstotal.md "PointsTotal") |
| --- | --- | --- |
| --- | --- |

IMTConServerAntiDDoS::ServersClear
Clear the list of access points of the Anti DDoS protection provider.
C++
MTAPIRES IMTConServerAntiDDoS::PointsClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAntiDDoS.PointsClear()  
---  
Python (Manager API)
MTConServerAntiDDoS.PointsClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The access points should be received from your Anti DDoS protection provider. Clients will connect to the trading platform using these points.