# PointsNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ PointsNext | [](imtconserveraccess_pointstotal.md "PointsTotal") [](imtconserveraccess_bindingsadd.md "BindingsAdd") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::PointsNext
Get an access point by the index.
C++
LPCWSTR IMTConServerAccess::PointsNext( const UINT pos // Position of the access point ) const  
---  
.NET (Gateway/Manager API)
string CIMTConServerAccess.PointsNext( uint pos // Position of the access point )  
---  
Python (Manager API)
MTConServerAccess.PointsNext( pos # Position of the access point )  
---  
Parameters
pos
[in] Position of the access point in the list, starting with 0.
Return Value
If successful, it returns a pointer to a string with the address. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConServerAccess](imtconserveraccess.md "IMTConServerAccess") object.
To use the string after the object removal (call of the [IMTConServerAccess::Release](imtconserveraccess_release.md "Release") method of this object), a copy of it should be created.
The method is obsolete. Use [IMTConServer::PointsNext](imtconserver_pointsnext.md "PointsNext") instead.