# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocument ](imtdocument.md "IMTDocument")/ Assign | [](imtdocument_release.md "Release") [](imtdocument_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTDocument::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTDocument::Assign( const IMTDocument* document // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocument.Assign( CIMTDocument document // Source object )  
---  
Parameters
document
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.