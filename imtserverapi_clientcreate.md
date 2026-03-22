# ClientCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ ClientCreate | [](serverapi_clients.md "Clients") [](imtserverapi_clientcreatearray.md "ClientCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ClientCreate
Create a client object.
IMTClient* IMTServerAPI::ClientCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTClient](imtclient.md "IMTClient") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTClient::Release](imtclient_release.md "Release") method of this object.