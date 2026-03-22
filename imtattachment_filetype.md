# FileType (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTAttachment ](imtattachment.md "IMTAttachment")/ FileType | [](imtattachment_relatedclient.md "RelatedClient") [](imtattachment_filename.md "FileName") |
| --- | --- | --- |
| --- | --- |

IMTAttachment::FileType
Get the file type.
C++
UINT IMTAttachment::FileType() const  
---  
.NET (Gateway/Manager API)
uint CIMTAttachment.FileType()  
---  
Return Value
A value of the [IMTAttachment::EnFileType](imtattachment_enum.htm#enfiletype) enumeration.
IMTAttachment::FileType
Set the file type.
C++
MTAPIRES IMTAttachment::FileType( const UINT type // File type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAttachment.FileType( uint type // File type )  
---  
Parameters
type
[in] File type. The type is passed using the [IMTAttachment::EnFileType](imtattachment_enum.htm#enfiletype) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.