# OnlineCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Online Connections ](imtmanagerapi_online.md "Online Connection Functions")/ OnlineCreateArray | [](imtmanagerapi_onlinecreate.md "OnlineCreate") [](imtmanagerapi_onlinetotal.md "OnlineTotal") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OnlineCreateArray
Create connection record array object.
C++
IMTOnlineArray* IMTManagerAPI::OnlineCreateArray()  
---  
.NET
CIMTOnlineArray CIMTManagerAPI.OnlineCreateArray()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTOnlineArray](imtonlinearray.md "IMTOnlineArray") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling [IMTOnlineArray::Release](imtonlinearray_release.md "Release") method of this object.