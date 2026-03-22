# ClientAdd (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ ClientAdd | [](imtmanagerapi_clientcreatearray.md "ClientCreateArray") [](imtmanagerapi_clientaddarray.md "ClientAddBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ClientAdd
Add a client to the server database.
C++
MTAPIRES IMTManagerAPI::ClientAdd( IMTClient* client // client object )  
---  
.NET
MTRetCode CIMTManagerAPI.ClientAdd( CIMTClient client // client object )  
---  
Python
ManagerAPI.ClientAdd( MTClient client # client object )  
---  
Parameters
client
[in] [Client object](imtclient.md "IMTClient").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred which corresponds to the response code.
Note
A client can only be added to the database of the server, to which the application is connected.
When creating a client, the server automatically assigns to this client a unique identifier [IMTClient::RecordID](imtclient_recordid.md "RecordID").
During addition, the integrity of client records is checked. The [IMTClient::PersonName](imtclient_personname.md "PersonName") field must be filled in the record.