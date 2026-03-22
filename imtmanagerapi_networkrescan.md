# NetworkRescan (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Operations with Connection ](imtmanagerapi_network.md "Network Functions")/ NetworkRescan | [](imtmanagerapi_network.md "Network Functions") [](imtmanagerapi_networkbytessent.md "NetworkBytesSent") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::NetworkRescan
Forced launch of scanning for access points and receiving the scanning results. Scanning includes obtaining a complete map of the network with the data on the access servers' workload, as well as measuring ping to each access point. After obtaining the data, decision is made on whether the access point better than the current one is found.
C++
MTAPIRES IMTManagerAPI::NetworkRescan( const UINT flags // Flags (for future use) const UINT timeout // Timeout of waiting for scanning )  
---  
.NET
MTRetCode CIMTManagerAPI.NetworkRescan( uint flags // Flags (for future use) uint timeout // Timeout of waiting for scanning )  
---  
Python
ManagerAPI.NetworkRescan( int flags # Flags (for future use) int timeout # Timeout of waiting for scanning )  
---  
Parameters
flags
[in] Flags. This parameter is not used at the moment.
timeout
[in] Time to wait for the completion of scanning in milliseconds. If scanning is not finished within the specified time, the check for the best access point is performed nonetheless. If it is present, the method returns MT_RET_OK value. In order to check the availability of the best access point without waiting, this method can be called with timeout parameter equal to 0.
Return Value
The method reports on scanning results using the following response codes:
  * [MT_RET_OK](retcodes_successful.md "Successful completion") \- the best access point found. To connect to it, [IMTManagerAPI::Disconnect](imtmanagerapi_disconnect.md "Disconnect") method can be called. It is followed by [IMTManagerAPI::Connect](imtmanagerapi_connect.md "Connect") passing the name of the server, connection to which is to be performed. The server name can be received using [IMTManagerAPI::NetworkServer](imtmanagerapi_networkserver.md "NetworkServer") method.
  * [MT_RET_NOTFOUND](retcodes_common.md "Common errors") \- the best access point not found.
  * [MT_RET_FREQUENT](retcodes_common.md "Common errors") \- too frequent requests. Requests can be made no more frequently than once per half an hour.

Note
In order to arrange selection of the best access point for connecting Manager API, the name of the server for connection instead of an IP address should be specified in [IMTManagerAPI::Connect](imtmanagerapi_connect.md "Connect") method. The server name can be received using [IMTManagerAPI::NetworkServer](imtmanagerapi_networkserver.md "NetworkServer") method.