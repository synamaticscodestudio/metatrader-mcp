# CustomCreateStream (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Custom Functions ](serverapi_custom.md "Custom Functions")/ CustomCreateStream | [](imtserverapi_customunsubscribe.md "CustomUnsubscribe") [](imtserverapi_customcommand.md "CustomCommand") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::CustomCreateStream
Creation of an object of a byte stream.
IMTByteStream* IMTServerAPI::CustomCreateStream()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTByteStream](imtbytestream.md "IMTByteStream") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTByteStream::Release](imtbytestream_release.md "Release") method of this object.