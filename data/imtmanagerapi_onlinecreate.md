# OnlineCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Online Connections ](imtmanagerapi_online.md "Online Connection Functions")/ OnlineCreate | [](imtmanagerapi_online.md "Online Connection Functions") [](imtmanagerapi_onlinecreatearray.md "OnlineCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OnlineCreate
Create connection record object.
C++
IMTOnline* IMTManagerAPI::OnlineCreate()  
---  
.NET
CIMTOnline CIMTManagerAPI::OnlineCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTOnline](imtonline.md "IMTOnline") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling [IMTOnline::Release](imtonline_release.md "Release") method of this object.