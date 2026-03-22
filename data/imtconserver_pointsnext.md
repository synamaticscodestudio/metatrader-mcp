# PointsNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ PointsNext | [](imtconserver_pointstotal.md "PointsTotal") [](imtconserver_bindingsadd.md "BindingsAdd") |
| --- | --- | --- |
| --- | --- |

IMTConServer::PointsNext
Get an access point by the index.
C++
LPCWSTR IMTConServer::PointsNext( const UINT pos // Position of the access point ) const  
---  
.NET (Gateway/Manager API)
string CIMTConServer.PointsNext( uint pos // Position of the access point )  
---  
Python (Manager API)
MTConServer.PointsNext( pos # Position of the access point )  
---  
Parameters
pos
[in] Position of the access point in the list, starting with 0.
Return Value
If successful, it returns a pointer to a string with the address. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConServer](imtconserver.md "IMTConServer") object.
To use the string after the object removal (call of the [IMTConServer::Release](imtconserver_release.md "Release") method of this object), a copy of it should be created.
Connections from other platform components, client connections from terminals and API (for access servers) are accepted through public access points.