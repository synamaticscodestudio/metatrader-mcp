# OnlineDisconnectBatch (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Online Connections ](serverapi_online.md "Online Connections")/ OnlineDisconnectBatch | [](imtserverapi_onlinedisconnect.md "OnlineDisconnect") [](imtserverapi_onlinedisconnectbatcharray.md "OnlineDisconnectBatchArray") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::OnlineDisconnectBatch
Forced disconnection of multiple clients from the server.
MTAPIRES IMTServerAPI::OnlineDisconnectBatch( IMTOnlineArray* online, // Array of connection objects MTAPIRES* results // Array of results )  
---  
Parameters
online
[in] A pointer to the array of connections [IMTOnlineArray](imtonlinearray.md "IMTOnlineArray").
results
[out] Array with connection drop results. The size of the 'results' array must not be less than that of the 'online' array.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all connections were dropped. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the connections were dropped. Analyze the 'results' array for more details concerning the execution results. The result of an attempt to drop each connection from the 'online' array is added to 'results'. The index of a result corresponds to the index of a position in the source array.
Note
Connection drop can only be performed from the applications connected to the same server, to which the clients are connected. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.