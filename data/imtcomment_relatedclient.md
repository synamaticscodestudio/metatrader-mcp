# RelatedClient (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTComment ](imtcomment.md "IMTComment")/ RelatedClient | [](imtcomment_recordid.md "RecordID") [](imtcomment_relateddocument.md "RelatedDocument") |
| --- | --- | --- |
| --- | --- |

IMTComment::RelatedClient
Get the ID of the client with which the comment is associated.
C++
UINT64 IMTComment::RelatedClient() const  
---  
.NET (Gateway/Manager API)
ulong CIMTComment.RelatedClient()  
---  
Return Value
Client ID.
IMTComment::RelatedClient
Set the client ID with which the comment is associated.
C++
MTAPIRES IMTComment::RelatedClient( const UINT64 record_id // Identifier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTComment.RelatedClient( ulong record_id // Identifier )  
---  
Parameters
record_id
[in] Client ID. The client ID is equal to the [IMTClient::RecordID](imtclient_recordid.md "RecordID") value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
When adding a comment to a client, you only need to specify its ID in IMTComment::RelatedClient. When adding a comment to a client document, you should specify appropriate IDs in two fields, IMTComment::RelatedClient and [IMTComment::RelatedDocument](imtcomment_relateddocument.md "RelatedDocument").