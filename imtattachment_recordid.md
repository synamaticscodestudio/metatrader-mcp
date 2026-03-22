# RecordID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTAttachment ](imtattachment.md "IMTAttachment")/ RecordID | [](imtattachment_clear.md "Clear") [](imtattachment_relatedclient.md "RelatedClient") |
| --- | --- | --- |
| --- | --- |

IMTAttachment::RecordID
Get the attachment identifier.
C++
UINT64 IMTAttachment::RecordID() const  
---  
.NET (Gateway/Manager API)
ulong CIMTAttachment.RecordID()  
---  
Return Value
Attachment ID.
IMTAttachment::RecordID
Set the attachment identifier.
C++
MTAPIRES IMTAttachment::RecordID( const UINT64 record_id // Identifier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAttachment.RecordID( ulong record_id // Identifier )  
---  
Parameters
record_id
[in] Attachment ID.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.