# ApprovedBy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocument ](imtdocument.md "IMTDocument")/ ApprovedBy | [](imtdocument_approveddate.md "ApprovedDate") [](imtdocument_dateissue.md "DateIssue") |
| --- | --- | --- |
| --- | --- |

IMTDocument::ApprovedBy
Get the manager who approved/checked the document.
C++
UINT64 IMTDocument::ApprovedBy() const  
---  
.NET (Gateway/Manager API)
ulong CIMTDocument.ApprovedBy()  
---  
Return Value
The login of the manager who approved the document.
IMTDocument::ApprovedBy
Set the manager who approved/checked the document.
C++
MTAPIRES IMTDocument::ApprovedBy( const UINT64 manager // Manager )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocument.ApprovedBy( ulong manager // Manager )  
---  
Parameters
manager
[in] The login of the manager who approved the document.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
[IMTConManager::Login](imtconmanager_login.md "Login") is used for the login.