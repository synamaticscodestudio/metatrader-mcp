# Online Connections (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface")/ Online Connections | [](imtserverapi_useraccountget.md "UserAccountGet") [](imtserverapi_onlinecreate.md "OnlineCreate") |
| --- | --- | --- |
| --- | --- |

Online Connections
MetaTrader 5 Server API provides functions for receiving data on the current connections to the trade server. All types of connection are considered, including client, manager and API ones with the exception of the cluster components' (platform servers') connections.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [OnlineCreate](imtserverapi_onlinecreate.md "OnlineCreate") | Create connection record object. |
| [OnlineCreateArray](imtserverapi_onlinecreatearray.md "OnlineCreateArray") | Create connection record array object. |
| [OnlineTotal](imtserverapi_onlinetotal.md "OnlineTotal") | Get the total amount of the current connections to the trade server. |
| [OnlineNext](imtserverapi_onlinenext.md "OnlineNext") | Get connection record by index. |
| [OnlineGet](imtserverapi_onlineget.md "OnlineGet") | Get connection record by login. |
| [OnlineDisconnect](imtserverapi_onlinedisconnect.md "OnlineDisconnect") | Forced disconnection of a client from the server. |
| [OnlineDisconnectBatch](imtserverapi_onlinedisconnectbatch.md "OnlineDisconnectBatch") | Forced disconnection of multiple clients from the server. |
| [OnlineDisconnectBatchArray](imtserverapi_onlinedisconnectbatcharray.md "OnlineDisconnectBatchArray") | Forced disconnection of multiple clients from the server. |