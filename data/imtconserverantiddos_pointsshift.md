# PointsShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAntiDDoS ](imtconserverantiddos.md "IMTConServerAntiDDoS")/ PointsShift | [](imtconserverantiddos_pointsupdate.md "PointsUpdate") [](imtconserverantiddos_pointsdelete.md "PointsDelete") |
| --- | --- | --- |
| --- | --- |

IMTConServerAntiDDoS::PointsShift
Move a public access point of the Anti DDoS protection provider in the list.
C++
MTAPIRES IMTConServerAntiDDoS::PointsShift( const UINT pos, // The position of the access point const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAntiDDoS.PointsShift( uint pos, // The position of the access point int shift // Shift )  
---  
Python (Manager API)
MTConServerAntiDDoS.PointsShift( pos, # The position of the access point shift # Shift )  
---  
Parameters
pos
[in] Position of the access point in the list, starting with 0.
shift
[in] Shift from its current position. A negative value means shift towards the top of the list, a positive value shifts towards the end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The access points should be received from your Anti DDoS protection provider. Clients will connect to the trading platform using these points.