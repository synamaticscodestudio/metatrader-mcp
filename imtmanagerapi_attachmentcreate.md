# AttachmentCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ AttachmentCreate | [](imtmanagerapi_commentrequestbydocument.md "CommentRequestByDocument") [](imtmanagerapi_attachmentcreatearray.md "AttachmentCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::AttachmentCreate
Create an attachment object.
C++
IMTClient* IMTManagerAPI::AttachmentCreate()  
---  
.NET
CIMTClient CIMTManagerAPI.AttachmentCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTAttachment](imtattachment.md "IMTAttachment") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTAttachment::Release](imtattachment_release.md "Release") method of this object.