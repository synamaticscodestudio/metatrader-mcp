# OnlineCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Online Connections ](serverapi_online.md "Online Connections")/ OnlineCreate | [](serverapi_online.md "Online Connections") [](imtserverapi_onlinecreatearray.md "OnlineCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::OnlineCreate
Create connection record object.
IMTUser* IMTServerAPI::OnlineCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTOnline](imtonline.md "IMTOnline") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling [IMTOnline::Release](imtonline_release.md "Release") method of this object.