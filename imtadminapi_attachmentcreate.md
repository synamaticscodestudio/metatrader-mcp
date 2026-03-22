# AttachmentCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Clients ](imtadminapi_clients.md "Clients")/ AttachmentCreate | [](imtadminapi_commentrequestbydocument.md "CommentRequestByDocument") [](imtadminapi_attachmentcreatearray.md "AttachmentCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::AttachmentCreate
Create an attachment object.
C++
IMTClient* IMTAdminAPI::AttachmentCreate()  
---  
.NET
CIMTClient CIMTAdminAPI.AttachmentCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTAttachment](imtattachment.md "IMTAttachment") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTAttachment::Release](imtattachment_release.md "Release") method of this object.