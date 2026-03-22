# DocumentStatus (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocument ](imtdocument.md "IMTDocument")/ DocumentStatus | [](imtdocument_documentcomment.md "DocumentComment") [](imtdocument_attachmentsadd.md "AttachmentsAdd") |
| --- | --- | --- |
| --- | --- |

IMTDocument::DocumentStatus
Get the document status.
C++
UINT IMTDocument::DocumentStatus() const  
---  
.NET (Gateway/Manager API)
uint CIMTDocument.DocumentStatus()  
---  
Return Value
A value of the [IMTDocument::EnDocumentStatus](imtdocument_enum.htm#endocumentstatus) enumeration.
IMTDocument::DocumentStatus
Set the document status.
C++
MTAPIRES IMTDocument::DocumentStatus( const UINT status // Document status )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocument.DocumentStatus( uint status // Document status )  
---  
Parameters
status
[in] Document status. The status can be passed using the [IMTDocument::EnDocumentStatus](imtdocument_enum.htm#endocumentstatus) enumerations.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.