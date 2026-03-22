# OnlineGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Online Connections ](serverapi_online.md "Online Connections")/ OnlineGet | [](imtserverapi_onlinenext.md "OnlineNext") [](imtserverapi_onlinedisconnect.md "OnlineDisconnect") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::OnlineGet
Get connection record by login.
MTAPIRES IMTServerAPI::OnlineGet( const UINT64 login, // Client login IMTOnlineArray* online // Connection record array object )  
---  
Parameters
login
[in] The login of a client.
online
[out] Connection record array object. The online object should be first created using [IMTServerAPI::OnlineCreateArray](imtserverapi_onlinecreatearray.md "OnlineCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the data of a connection with the specified login to the online object.