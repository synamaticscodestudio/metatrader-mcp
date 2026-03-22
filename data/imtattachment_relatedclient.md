# RelatedClient (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTAttachment ](imtattachment.md "IMTAttachment")/ RelatedClient | [](imtattachment_recordid.md "RecordID") [](imtattachment_filetype.md "FileType") |
| --- | --- | --- |
| --- | --- |

IMTAttachment::RelatedClient
Get the client ID with which the attachment is associated.
C++
UINT64 IMTAttachment::RelatedClient() const  
---  
.NET (Gateway/Manager API)
ulong CIMTAttachment.RelatedClient()  
---  
Return Value
Client ID.
IMTAttachment::RelatedClient
Set the client ID with which the attachment is associated.
C++
MTAPIRES IMTAttachment::RelatedClient( const UINT64 record_id // Identifier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAttachment.RelatedClient( ulong record_id // Identifier )  
---  
Parameters
record_id
[in] Client ID. The client ID is equal to the [IMTClient::RecordID](imtclient_recordid.md "RecordID") value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.