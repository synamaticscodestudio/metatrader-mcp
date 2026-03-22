# NetworkAddress (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Operations with Connection ](imtadminapi_network.md "Network Functions")/ NetworkAddress | [](imtadminapi_networkserver.md "NetworkServer") [](imtadminapi_server_manage.md "Server Management") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::NetworkAddress
Receive IP address of the server Manager API is currently connected to.
C++
MTAPIRES IMTAdminAPI::NetworkAddress( MTAPISTR& address // Server address )  
---  
.NET
MTRetCode CIMTAdminAPI.NetworkAddress( out sting address // Server address )  
---  
Python
AdminAPI.NetworkAddress()  
---  
Parameters
address
[out] A reference to the IP address of the server Manager API is connected to.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.