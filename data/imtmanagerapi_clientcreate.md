# ClientCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ ClientCreate | [](imtmanagerapi_clients.md "Clients") [](imtmanagerapi_clientcreatearray.md "ClientCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ClientCreate
Create a client object.
C++
IMTClient* IMTManagerAPI::ClientCreate()  
---  
.NET
CIMTClient CIMTManagerAPI.ClientCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTClient](imtclient.md "IMTClient") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTClient::Release](imtclient_release.md "Release") method of this object.