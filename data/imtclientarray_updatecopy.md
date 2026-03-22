# UpdateCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClientArray ](imtclientarray.md "IMTClientArray")/ UpdateCopy | [](imtclientarray_update.md "Update") [](imtclientarray_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

IMTClientArray::UpdateCopy
Change a client at the specified position of an array by copying the parameters of a passed client object.
C++
MTAPIRES IMTClientArray::UpdateCopy( const UINT  pos, // Position const IMTClient* client // Client object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClientArray.UpdateCopy( uint  pos, // Position CIMTClient client // Client object )  
---  
Parameters
pos
[in] Position of a client in the array, starting with 0.
client
[in] [Client object](imtclient.md "IMTClient").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method copies the 'client' object parameters to the client object at the specified position in the array.
Unlike the [IMTClientArray::Update](imtclientarray_update.md "Update") method, this method call does not set any additional conditions for the control of the 'client' object, but is more resource-intensive, since an additional object is created.