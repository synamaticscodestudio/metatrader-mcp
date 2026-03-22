# OnlineCreateArray (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Online Connections ](serverapi_online.md "Online Connections")/ OnlineCreateArray | [](imtserverapi_onlinecreate.md "OnlineCreate") [](imtserverapi_onlinetotal.md "OnlineTotal") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::OnlineCreateArray
Create connection record array object.
IMTOrderArray* IMTServerAPI::OnlineCreateArray()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTOnlineArray](imtonlinearray.md "IMTOnlineArray") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling [IMTOnlineArray::Release](imtonlinearray_release.md "Release") method of this object.