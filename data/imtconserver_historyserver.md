# HistoryServer (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ HistoryServer | [](imtconserver_tradeserver.md "TradeServer") [](imtconserver_accessserver.md "AccessServer") |
| --- | --- | --- |
| --- | --- |

IMTConServer::HistoryServer
The interface of the History Server.
C++
IMTConServerHistory* IMTConServer::HistoryServer()  
---  
.NET (Gateway/Manager API)
CIMTConServerHistory CIMTConServer.HistoryServer()  
---  
Python (Manager API)
MTConServer.HistoryServer()  
---  
Return Value
It returns a pointer to the object that implements the [IMTConServerHistory](imtconserverhistory.md "IMTConServerHistory") interface. In case of failure, it returns NULL.
Note
The server type [IMTConServer::Type()](imtconserver_type.md "Type") defines what specific parameters the server has.
An interface obtained using this method does not require to be released, as it is passed as a pointer to an internal object of the [IMTConServer](imtconserver.md "IMTConServer") interface. Accordingly, after the release of IMTConServer (call of [IMTConServer::Release](imtconserver_release.md "Release")), the interface obtained by this method becomes invalid.