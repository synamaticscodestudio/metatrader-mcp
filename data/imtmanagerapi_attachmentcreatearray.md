# AttachmentCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ AttachmentCreateArray | [](imtmanagerapi_attachmentcreate.md "AttachmentCreate") [](imtmanagerapi_attachmentadd.md "AttachmentAdd") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::AttachmentCreateArray
Create an object of the array of attachments.
C++
IMTClient* IMTManagerAPI::AttachmentCreateArray()  
---  
.NET
CIMTClient CIMTManagerAPI.AttachmentCreateArray()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTAttachmentArray](imtattachmentarray.md "IMTAttachmentArray"). NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTAttachmentArray::Release](imtattachmentarray_release.md "Release") method of this object.