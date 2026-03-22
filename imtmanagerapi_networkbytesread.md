# NetworkBytesRead (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Operations with Connection ](imtmanagerapi_network.md "Network Functions")/ NetworkBytesRead | [](imtmanagerapi_networkbytessent.md "NetworkBytesSent") [](imtmanagerapi_networkserver.md "NetworkServer") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::NetworkBytesRead
Receive the number of bytes accepted from the server via Manager API. All copies of [IMTAdminAPI](imtadminapi.md "Administrator Interface") and [IMTManagerAPI](imtmanagerapi.md "Manager Interface") in the current process are considered.
C++
UINT64 IMTManagerAPI::NetworkBytesRead()  
---  
.NET
uint CIMTManagerAPI.NetworkBytesRead()  
---  
Python
ManagerAPI.NetworkBytesRead()  
---  
Return Value
Number of bytes accepted from the server via Manager API. All copies of [IMTAdminAPI](imtadminapi.md "Administrator Interface") and [IMTManagerAPI](imtmanagerapi.md "Manager Interface") in the current process are considered.