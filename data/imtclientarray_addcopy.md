# AddCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClientArray ](imtclientarray.md "IMTClientArray")/ AddCopy | [](imtclientarray_add.md "Add") [](imtclientarray_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

IMTClientArray::AddCopy
Add a copy of a client object at the end of an array.
C++
MTAPIRES IMTClientArray::AddCopy( const IMTClient* client // Client to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClientArray.AddCopy( CIMTClient client // Client to be added )  
---  
Parameters
client
[in] [Client object](imtclient.md "IMTClient").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the 'client' object and places it at the end of the array.
Unlike [IMTClientArray::Add(IMTClient* client)](imtclientarray_add.md "Add"), calling this method does not set any additional conditions for the control of the 'client' object, but is more resource-intensive, since an additional object is created.
IMTOrderArray::AddCopy
Add copies of client objects into an array.
C++
MTAPIRES IMTClientArray::AddCopy( const IMTClientArray* array // Array of clients to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClientArray.AddCopy( CIMTClientArray  array // Array of clients to be added )  
---  
Parameters
array
[in] An object of the clients array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the client objects belonging to the 'array' object, and inserts them at the end of the current array.
Unlike [IMTClientArray::Add(IMTClientArray* array)](imtorderarray_add.md "Add"), this method call does not change the source 'array' object, but is more resource-intensive, since additional objects are created.