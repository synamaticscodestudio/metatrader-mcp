# OnlineNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Online Connections ](serverapi_online.md "Online Connections")/ OnlineNext | [](imtserverapi_onlinetotal.md "OnlineTotal") [](imtserverapi_onlineget.md "OnlineGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::OnlineNext
Get connection record by index.
MTAPIRES IMTServerAPI::OnlineNext( const UINT pos, // Connection record position IMTOnline* online // Connection record object )  
---  
Parameters
pos
[in] Position of the record, starting with 0.
online
[out] Connection record object. The online object should be first created using [IMTServerAPI::OnlineCreate](imtserverapi_onlinecreate.md "OnlineCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the data of a connection records with the specified index to the online object.