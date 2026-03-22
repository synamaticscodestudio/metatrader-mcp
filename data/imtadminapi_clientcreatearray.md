# ClientCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Clients ](imtadminapi_clients.md "Clients")/ ClientCreateArray | [](imtadminapi_clientcreate.md "ClientCreate") [](imtadminapi_clientadd.md "ClientAdd") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ClientCreateArray
Create an object of the client array.
C++
IMTClientArray* IMTAdminAPI::ClientCreateArray()  
---  
.NET
CIMTClientArray CIMTAdminAPI.ClientCreateArray()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTClientArray](imtclientarray.md "IMTClientArray") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTClientArray::Release](imtclientarray_release.md "Release") method of this object.