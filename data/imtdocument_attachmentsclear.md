# AttachmentsClear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocument ](imtdocument.md "IMTDocument")/ AttachmentsClear | [](imtdocument_attachmentsadd.md "AttachmentsAdd") [](imtdocument_attachmentstotal.md "AttachmentsTotal") |
| --- | --- | --- |
| --- | --- |

IMTDocument::AttachmentsClear
Clear the list of document files.
C++
MTAPIRES IMTDocument::AttachmentsClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocument.AttachmentsClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method clears the entire list of files in a document.