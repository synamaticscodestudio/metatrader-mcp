# ClientCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Clients ](imtadminapi_clients.md "Clients")/ ClientCreate | [](imtadminapi_clients.md "Clients") [](imtadminapi_clientcreatearray.md "ClientCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ClientCreate
Create a client object.
C++
IMTClient* IMTAdminAPI::ClientCreate()  
---  
.NET
CIMTClient CIMTAdminAPI.ClientCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTClient](imtclient.md "IMTClient") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTClient::Release](imtclient_release.md "Release") method of this object.