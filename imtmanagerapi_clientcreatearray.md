# ClientCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ ClientCreateArray | [](imtmanagerapi_clientcreate.md "ClientCreate") [](imtmanagerapi_clientadd.md "ClientAdd") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ClientCreateArray
Create an object of the client array.
C++
IMTClientArray* IMTManagerAPI::ClientCreateArray()  
---  
.NET
CIMTClientArray CIMTManagerAPI.ClientCreateArray()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTClientArray](imtclientarray.md "IMTClientArray") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTClientArray::Release](imtclientarray_release.md "Release") method of this object.