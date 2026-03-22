# DocumentComment (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocument ](imtdocument.md "IMTDocument")/ DocumentComment | [](imtdocument_documentname.md "DocumentName") [](imtdocument_documentstatus.md "DocumentStatus") |
| --- | --- | --- |
| --- | --- |

IMTDocument::DocumentName
Get a comment to a document.
C++
LPCWSTR IMTDocument::DocumentComment() const  
---  
.NET (Gateway/Manager API)
string CIMTDocument.DocumentComment()  
---  
Return Value
If successful, a pointer to a string with a comment is returned. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTDocument](imtdocument.md "IMTDocument") object.
To use the string after the object removal (call of the [IMTDocument::Release](imtdocument_release.md "Release") method of this object), a copy of it should be created.
IMTDocument::DocumentComment
Set a comment to a document.
C++
MTAPIRES IMTDocument::DocumentComment( LPCWSTR comment // Comment to a document )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocument.DocumentComment( string comment // Comment to a document )  
---  
Parameters
comment
[in] Comment to a document.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The document comment length is limited to 256 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.