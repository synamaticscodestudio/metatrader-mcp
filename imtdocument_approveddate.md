# ApprovedDate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocument ](imtdocument.md "IMTDocument")/ ApprovedDate | [](imtdocument_relatedclient.md "RelatedClient") [](imtdocument_approvedby.md "ApprovedBy") |
| --- | --- | --- |
| --- | --- |

IMTDocument::ApprovedDate
Get the document approval date.
C++
INT64 IMTDocument::ApprovedDate() const  
---  
.NET (Gateway/Manager API)
long CIMTDocument.ApprovedDate()  
---  
Return Value
Document approval date in seconds since 01.01.1970.
IMTDocument::ApprovedDate
Set the document approval date.
C++
MTAPIRES IMTDocument::ApprovedDate( const INT64 date // Date of approval )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocument.ApprovedDate( long date // Date of approval )  
---  
Parameters
time
[in] Document approval date in seconds since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.