# PointsDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAntiDDoS ](imtconserverantiddos.md "IMTConServerAntiDDoS")/ PointsDelete | [](imtconserverantiddos_pointsshift.md "PointsShift") [](imtconserverantiddos_pointsclear.md "PointsClear") |
| --- | --- | --- |
| --- | --- |

IMTConServerAntiDDoS::PointsDelete
Delete a public access point of the Anti DDoS protection provider with the specified index.
C++
MTAPIRES IMTConServerAntiDDoS::PointsDelete( const UINT pos // The position of the access point )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAntiDDoS.PointsDelete( uint pos // The position of the access point )  
---  
Python (Manager API)
MTConServerAntiDDoS.PointsDelete( pos # The position of the access point )  
---  
Parameters
pos
[in] Position of the access point in the list, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The access points should be received from your Anti DDoS protection provider. Clients will connect to the trading platform using these points.