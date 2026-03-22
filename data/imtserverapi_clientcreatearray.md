# ClientCreateArray (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ ClientCreateArray | [](imtserverapi_clientcreate.md "ClientCreate") [](imtserverapi_clientsubscribe.md "ClientSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ClientCreateArray
Create an object of the client array.
IMTClientArray* IMTServerAPI::ClientCreateArray()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTClientArray](imtclientarray.md "IMTClientArray") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTClientArray::Release](imtclientarray_release.md "Release") method of this object.