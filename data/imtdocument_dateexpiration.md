# DateExpiration (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocument ](imtdocument.md "IMTDocument")/ DateExpiration | [](imtdocument_dateissue.md "DateIssue") [](imtdocument_documenttype.md "DocumentType") |
| --- | --- | --- |
| --- | --- |

IMTDocument::DateExpiration
Get the document expiry date.
C++
INT64 IMTDocument::DateExpiration() const  
---  
.NET (Gateway/Manager API)
long CIMTDocument.DateExpiration()  
---  
Return Value
Document expiry date in seconds since 01.01.1970.
IMTDocument::DateExpiration
Set the document expiry date.
C++
MTAPIRES IMTDocument::DateExpiration( const INT64 date // Expiry date )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocument.DateExpiration( long date // Expiry date )  
---  
Parameters
date
[in] Document expiry date in seconds since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.