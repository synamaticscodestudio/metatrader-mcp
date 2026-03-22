# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTAttachment ](imtattachment.md "IMTAttachment")/ Assign | [](imtattachment_release.md "Release") [](imtattachment_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTAttachment::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTAttachment::Assign( const IMTAttachment* document // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAttachment.Assign( CIMTAttachment document // Source object )  
---  
Parameters
attachment
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.