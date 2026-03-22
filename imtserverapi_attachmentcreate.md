# AttachmentCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ AttachmentCreate | [](imtserverapi_commentgetbydocument.md "CommentGetByDocument") [](imtserverapi_attachmentadd.md "AttachmentAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::AttachmentCreate
Create an attachment object.
IMTClient* IMTServerAPI::AttachmentCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTAttachment](imtattachment.md "IMTAttachment") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTAttachment::Release](imtattachment_release.md "Release") method of this object.