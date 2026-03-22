# Next (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTAttachmentArray ](imtattachmentarray.md "IMTAttachmentArray")/ Next | [](imtattachmentarray_total.md "Total") [](imtattachmentarray_sort.md "Sort") |
| --- | --- | --- |
| --- | --- |

IMTAttachmentArray::Next
Get an attachment object by its position.
C++
IMTAttachment* IMTAttachmentArray::Next( const UINT pos // attachment position ) const  
---  
.NET (Gateway/Manager API)
CIMTAttachment CIMTAttachmentArray.Next( uint  pos // attachment position )  
---  
Parameters
pos
[in] Position of an attachment in the array, starting with 0.
Return Value
If successful, it returns a pointer to the attachment object at the specified position. Otherwise NULL is returned.
Note
The lifetime of the returned object is controlled by the current array object. Thus, if an array object is deleted, the returned pointer becomes invalid.
The deletion of the returned object (by a call of [IMTAttachment::Release](imtattachment_release.md "Release")) will cause the pointer stored inside the array to become invalid. Furthermore, the pointer call (including a call during array object deletion) will cause the plugin and the server to crash.