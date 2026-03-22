# ProxySet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Connection to the Server ](imtmanagerapi_connection.md "Connecting to the Server")/ ProxySet | [](imtmanagerapi_unsubscribe.md "Unsubscribe") [](imtmanagerapi_network.md "Network Functions") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ProxySet
Set parameters of connection to the trading platform through a proxy server.
C++
virtual void IMTManagerAPI::ProxySet( const MTProxyInfo& proxy // Proxy server )  
---  
.NET
void CIMTManagerAPI.ProxySet( MTProxyInfo proxy // Proxy server )  
---  
Parameters
proxy
[in] A reference to the [MTProxyInfo](mtproxyinfo.md "MTProxyInfo") structure that contains information about the parameters of connection via a proxy server.