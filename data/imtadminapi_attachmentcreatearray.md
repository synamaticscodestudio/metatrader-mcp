# AttachmentCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Clients ](imtadminapi_clients.md "Clients")/ AttachmentCreateArray | [](imtadminapi_attachmentcreate.md "AttachmentCreate") [](imtadminapi_attachmentadd.md "AttachmentAdd") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::AttachmentCreateArray
Create an object of the array of attachments.
C++
IMTClient* IMTAdminAPI::AttachmentCreateArray()  
---  
.NET
CIMTClient CIMTAdminAPI.AttachmentCreateArray()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTAttachmentArray](imtattachmentarray.md "IMTAttachmentArray"). NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTAttachmentArray::Release](imtattachmentarray_release.md "Release") method of this object.