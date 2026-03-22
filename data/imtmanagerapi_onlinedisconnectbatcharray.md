# OnlineDisconnectBatchArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Online Connections ](imtmanagerapi_online.md "Online Connection Functions")/ OnlineDisconnectBatchArray | [](imtmanagerapi_onlinedisconnectbatch.md "OnlineDisconnectBatch") [](imtmanagerapi_trading.md "Trade Database Functions") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OnlineDisconnectBatchArray
Forced disconnection of multiple clients from the server.
C++
MTAPIRES IMTManagerAPI::OnlineDisconnectBatch( IMTOnline** online, // Array of connection objects const UINT online_total, // Number of objects in the array MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTManagerAPI.OnlineDisconnectBatch( CIMTOnline[] online, // Array of connection objects MTRetCode[] results // Array of results )  
---  
Parameters
online
[in] A pointer to the array of connection objects [IMTOnline](imtonline.md "IMTOnline").
online_total
[in] Number of object in the 'online' array.
results
[out] Array with connection drop results. The size of the 'results' array must not be less than that of the 'online' array.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all connections were dropped. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the connections were dropped. Analyze the 'results' array for more details concerning the execution results. The result of an attempt to drop each connection from the 'online' array is added to 'results'. The index of a result corresponds to the index of a position in the source array.
Note
Connection drop can only be performed from the applications connected to the same server, to which the clients are connected. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.