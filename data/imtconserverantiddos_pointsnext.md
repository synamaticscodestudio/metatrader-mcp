# PointsNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAntiDDoS ](imtconserverantiddos.md "IMTConServerAntiDDoS")/ PointsNext | [](imtconserverantiddos_pointstotal.md "PointsTotal") [](imtconserverantiddos_serversadd.md "ServersAdd") |
| --- | --- | --- |
| --- | --- |

IMTConServerAntiDDoS::PointsNext
Get a public access point of the Anti DDoS protection provider with the specified index.
C++
MTAPIRES IMTConServerAntiDDoS::PointsNext( const UINT pos // The position of the access point ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAntiDDoS.PointsNext( uint pos // The position of the access point )  
---  
Python (Manager API)
MTConServerAntiDDoS.PointsNext( pos # The position of the access point )  
---  
Parameters
pos
[in] Position of the access point in the list, starting with 0.
Return Value
If successful, it returns a pointer to a string with the address. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConServerAntiDDoS](imtconserverantiddos.md "IMTConServerAntiDDoS") object.
To use the string after the object removal (call of the [IMTConServerAntiDDoS::Release](imtconserverantiddos_release.md "Release") method of this object), a copy of it should be created.
The access points should be received from your Anti DDoS protection provider. Clients will connect to the trading platform using these points.