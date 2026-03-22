# RelatedClient (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocument ](imtdocument.md "IMTDocument")/ RelatedClient | [](imtdocument_recordid.md "RecordID") [](imtdocument_approveddate.md "ApprovedDate") |
| --- | --- | --- |
| --- | --- |

IMTDocument::RelatedClient
Get the identifier of the client with which the document is associated.
C++
UINT64 IMTDocument::RelatedClient() const  
---  
.NET (Gateway/Manager API)
ulong CIMTDocument.RelatedClient()  
---  
Return Value
Client ID.
IMTDocument::RelatedClient
Set the identifier of the client with which the document is associated.
C++
MTAPIRES IMTDocument::RelatedClient( const UINT64 record_id // Identifier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocument.RelatedClient( ulong record_id // Identifier )  
---  
Parameters
record_id
[in] Client ID. The client ID is equal to the [IMTClient::RecordID](imtclient_recordid.md "RecordID") value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.