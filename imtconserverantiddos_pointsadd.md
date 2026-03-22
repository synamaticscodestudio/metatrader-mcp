# PointsAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAntiDDoS ](imtconserverantiddos.md "IMTConServerAntiDDoS")/ PointsAdd | [](imtconserverantiddos_accessmask.md "AccessMask") [](imtconserverantiddos_pointsupdate.md "PointsUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConServerAntiDDoS::PointsAdd
Add a public access point of the Anti DDoS protection provider.
C++
MTAPIRES IMTConServerAntiDDoS::PointsAdd( LPCWSTR path // Address and port of the access point )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAntiDDoS.PointsAdd( string path // Address and port of the access point )  
---  
Python (Manager API)
MTConServerAntiDDoS.PointsAdd( string path # Address and port of the access point )  
---  
Parameters
path
[in] Address and port of the access point, separated by a colon.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
An access point is specified in the format address:port.
The length of the address is limited to 64 characters (including the end-of-line character). If a string of a greater length is assigned, it is cut to this length.
The access points should be received from your Anti DDoS protection provider. Clients will connect to the trading platform using these points.