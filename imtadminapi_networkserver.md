# NetworkServer (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Operations with Connection ](imtadminapi_network.md "Network Functions")/ NetworkServer | [](imtadminapi_networkbytesread.md "NetworkBytesRead") [](imtadminapi_networkaddress.md "NetworkAddress") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::NetworkServer
Receive the name of the server Manager API is currently connected to.
MTAPIRES IMTAdminAPI::NetworkServer( MTAPISTR& server // server name )  
---  
.NET
MTRetCode CIMTAdminAPI.NetworkServer( out string server // server name )  
---  
Python
AdminAPI.NetworkServer()  
---  
Parameters
server
[out] A reference to the name of the server Manager API is connected to.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.