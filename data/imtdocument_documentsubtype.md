# DocumentSubtype (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocument ](imtdocument.md "IMTDocument")/ DocumentSubtype | [](imtdocument_documenttype.md "DocumentType") [](imtdocument_documentname.md "DocumentName") |
| --- | --- | --- |
| --- | --- |

IMTDocument::DocumentSubtype
Get the document subtype.
C++
UINT IMTDocument::DocumentSubtype() const  
---  
.NET (Gateway/Manager API)
uint CIMTDocument.DocumentSubtype()  
---  
Return Value
A value of the [IMTDocument::EnDocumentSubtype](imtdocument_enum.htm#endocumentsubtype) enum.
IMTDocument::DocumentSubtype
Set the document type.
C++
MTAPIRES IMTDocument::DocumentSubtype( const UINT type // Document subtype )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocument.DocumentSubtype( uint type // Document subtype )  
---  
Parameters
subtype
[in] Document subtype. The document subtype is passed using the [IMTDocument::EnDocumentSubtype](imtdocument_enum.htm#endocumentsubtype) enum.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.