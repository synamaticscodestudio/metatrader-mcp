# TradeServer (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ TradeServer | [](imtconserver_networkcritical.md "NetworkCritical") [](imtconserver_historyserver.md "HistoryServer") |
| --- | --- | --- |
| --- | --- |

IMTConServer::TradeServer
The interface of the Trade Server.
C++
IMTConServerTrade* IMTConServer::TradeServer()  
---  
.NET (Gateway/Manager API)
CIMTConServerTrade CIMTConServer.TradeServer()  
---  
Python (Manager API)
MTConServer.TradeServer()  
---  
Return Value
It returns a pointer to the object that implements the [IMTConServerTrade](imtconservertrade.md "IMTConServerTrade") interface. In case of failure, it returns NULL.
Note
The server type [IMTConServer::Type()](imtconserver_type.md "Type") defines what specific parameters the server has.
An interface obtained using this method does not require to be released, as it is passed as a pointer to an internal object of the [IMTConServer](imtconserver.md "IMTConServer") interface. Accordingly, after the release of IMTConServer (call of [IMTConServer::Release](imtconserver_release.md "Release")), the interface obtained by this method becomes invalid.