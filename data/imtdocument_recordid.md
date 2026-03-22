# RecordID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocument ](imtdocument.md "IMTDocument")/ RecordID | [](imtdocument_clear.md "Clear") [](imtdocument_relatedclient.md "RelatedClient") |
| --- | --- | --- |
| --- | --- |

IMTDocument
Get the document identifier.
C++
UINT64 IMTDocument::RecordID() const  
---  
.NET (Gateway/Manager API)
ulong CIMTDocument.RecordID()  
---  
Return Value
Document ID.
IMTDocument::RecordID
Set the document identifier.
C++
MTAPIRES IMTDocument::RecordID( const UINT64 record_id // Identifier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocument.RecordID( ulong record_id // Identifier )  
---  
Parameters
record_id
[in] Document ID.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.