# OnlineDisconnect (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Online Connections ](serverapi_online.md "Online Connections")/ OnlineDisconnect | [](imtserverapi_onlineget.md "OnlineGet") [](imtserverapi_onlinedisconnectbatch.md "OnlineDisconnectBatch") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::OnlineDisconnect
Forced disconnection of a client from the server.
MTAPIRES IMTServerAPI::OnlineDisconnect( IMTOnline* online // Connection record object )  
---  
Parameters
online
[out] Connection record object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Forced disconnection is required to ensure that new account settings are activated. For example, after account password change, you can disconnect this account from the server so that the user logs in with the new password.
After the connection is dropped, the client terminals attempt to reconnect to the server automatically.
The method only works if the [pumping modes](imtmanagerapi_enpumpmodes.md "Pumping Mode") PUMP_MODE_USERS and PUMP_MODE_ACTIVITY are enabled.