# DateIssue (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocument ](imtdocument.md "IMTDocument")/ DateIssue | [](imtdocument_approvedby.md "ApprovedBy") [](imtdocument_dateexpiration.md "DateExpiration") |
| --- | --- | --- |
| --- | --- |

IMTDocument::DateIssue
Get the document issue date.
C++
INT64 IMTDocument::DateIssue() const  
---  
.NET (Gateway/Manager API)
long CIMTDocument.DateIssue()  
---  
Return Value
Document issue date in seconds since 01.01.1970.
IMTDocument::DateIssue
Set the document issue date.
C++
MTAPIRES IMTDocument::DateIssue( const INT64 date // Date of issue )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocument.DateIssue( long date // Date of issue )  
---  
Parameters
date
[in] Document issue date in seconds since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.