# PointsUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAntiDDoS ](imtconserverantiddos.md "IMTConServerAntiDDoS")/ PointsUpdate | [](imtconserverantiddos_pointsadd.md "PointsAdd") [](imtconserverantiddos_pointsshift.md "PointsShift") |
| --- | --- | --- |
| --- | --- |

IMTConServerAntiDDoS::PointsUpdate
Edit the public access point of the Anti DDoS protection provider.
C++
MTAPIRES IMTConServerAntiDDoS::PointsUpdate( const UINT pos, // The position of the access point LPCWSTR address // Address and port of the access point )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAntiDDoS.PointsUpdate( uint  pos, // The position of the access point string address // Address and port of the access point )  
---  
Python (Manager API)
MTConServerAntiDDoS.PointsUpdate( pos, # The position of the access point address # Address and port of the access point )  
---  
Parameters
pos
[in] Position of the access point in the list, starting with 0.
address
[in] The updated address and port of the access point, separated by a colon.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
An access point is specified in the format address:port.
The length of the address is limited to 64 characters (including the end-of-line character). If a string of a greater length is assigned, it is cut to this length.
The access points should be received from your Anti DDoS protection provider. Clients will connect to the trading platform using these points.