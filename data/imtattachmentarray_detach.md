# Detach (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTAttachmentArray ](imtattachmentarray.md "IMTAttachmentArray")/ Detach | [](imtattachmentarray_delete.md "Delete") [](imtattachmentarray_update.md "Update") |
| --- | --- | --- |
| --- | --- |

IMTAttachmentArray::Detach
Detach an attachment object from an array.
C++
IMTAttachment* IMTAttachmentArray::Detach( const UINT pos // attachment position ) const  
---  
.NET (Gateway/Manager API)
CIMTAttachment CIMTAttachmentArray.Detach( uint pos // attachment position )  
---  
Parameters
pos
[in] Position of an attachment in the array, starting with 0.
Return Value
Returns a pointer to the detached attachment object.
Note
This method removes a pointer to the object at the given position of the array and returns it. The size of the array is decreased by one, and the deleted object is not released.