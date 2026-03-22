# NetworkBytesRead (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Operations with Connection ](imtadminapi_network.md "Network Functions")/ NetworkBytesRead | [](imtadminapi_networkbytessent.md "NetworkBytesSent") [](imtadminapi_networkserver.md "NetworkServer") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::NetworkBytesRead
Receive the number of bytes accepted from the server via Manager API. All copies of [IMTAdminAPI](imtadminapi.md "Administrator Interface") and [IMTManagerAPI](imtmanagerapi.md "Manager Interface") in the current process are considered.
C++
UINT64 IMTAdminAPI::NetworkBytesRead()  
---  
.NET
ulong CIMTAdminAPI.NetworkBytesRead()  
---  
Python
AdminAPI.NetworkBytesRead()  
---  
Return Value
Number of bytes accepted from the server via Manager API. All copies of [IMTAdminAPI](imtadminapi.md "Administrator Interface") and [IMTManagerAPI](imtmanagerapi.md "Manager Interface") in the current process are considered.