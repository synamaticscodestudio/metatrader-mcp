# DocumentType (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocument ](imtdocument.md "IMTDocument")/ DocumentType | [](imtdocument_dateexpiration.md "DateExpiration") [](imtdocument_documentsubtype.md "DocumentSubtype") |
| --- | --- | --- |
| --- | --- |

IMTDocument::DocumentType
Get the document type.
C++
UINT IMTDocument::DocumentType() const  
---  
.NET (Gateway/Manager API)
uint CIMTDocument.DocumentType()  
---  
Return Value
A value of the [IMTDocument::EnDocumentTypes](imtdocument_enum.htm#endocumenttypes) enumeration.
IMTDocument::DocumentType
Set the document type.
C++
MTAPIRES IMTDocument::DocumentType( const UINT type // Document type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocument.DocumentType( uint type // Document type )  
---  
Parameters
type
[in] Document type. The document type is passed using the [IMTDocument::EnDocumentTypes](imtdocument_enum.htm#endocumenttypes) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.