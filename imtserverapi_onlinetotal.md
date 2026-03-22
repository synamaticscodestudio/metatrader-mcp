# OnlineTotal (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Online Connections ](serverapi_online.md "Online Connections")/ OnlineTotal | [](imtserverapi_onlinecreatearray.md "OnlineCreateArray") [](imtserverapi_onlinenext.md "OnlineNext") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::OnlineTotal
Get the total amount of the current connections to the trade server.
UINT IMTServerAPI::OnlineTotal()  
---  
Return Value
Amount of the current connections to the trade server.
Notes
All types of connection are considered, including client, manager and API ones with the exception of the cluster components' (platform servers') connections.