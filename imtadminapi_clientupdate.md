# ClientUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Clients ](imtadminapi_clients.md "Clients")/ ClientUpdate | [](imtadminapi_clientaddarraybatch.md "ClientAddBatchArray") [](imtadminapi_clientupdatebatch.md "ClientUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ClientUpdate
Update a client in the server database.
C++
MTAPIRES IMTAdminAPI::ClientUpdate( IMTClient* client // client object )  
---  
.NET
MTRetCode CIMTAdminAPI.ClientUpdate( CIMTClient client // client object )  
---  
Python
AdminAPI.ClientUpdate( MTClient client # client object )  
---  
Parameters
client
[in] [Client object](imtclient.md "IMTClient").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
A client can only be updated from the applications connected to the trade server, on which the client has been created. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
All required fields in the 'client' object must be filled, not only the ones that need to be changed. It is recommended that you first receive a client object from the server, change the required fields in it, and then send the changed object back to the server.
During update, a client record is checked for integrity. The [IMTClient::PersonName](imtclient_personname.md "PersonName") field must be filled in the record.