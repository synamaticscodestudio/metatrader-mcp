# CustomCreateStream (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Custom Functions ](imtmanagerapi_custom.md "Custom Functions")/ CustomCreateStream | [](imtmanagerapi_customcommand.md "CustomCommand") [](imtmanagerapi_ecn.md "ECN") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::CustomCreateStream
Creation of an object of a byte stream.
C++
IMTByteStream* IMTManagerAPI::CustomCreateStream()  
---  
.NET
CIMTByteStream CIMTManagerAPI.CustomCreateStream()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTByteStream](imtbytestream.md "IMTByteStream") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTByteStream::Release](imtbytestream_release.md "Release") method of this object.