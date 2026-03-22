# FileFlags (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTAttachment ](imtattachment.md "IMTAttachment")/ FileFlags | [](imtattachment_filesize.md "FileSize") [](imtattachmentarray.md "IMTAttachmentArray") |
| --- | --- | --- |
| --- | --- |

IMTAttachment::FileFlags
Get the file flags.
C++
UINT IMTAttachment::FileFlags() const  
---  
.NET (Gateway/Manager API)
uint CIMTAttachment.FileFlags()  
---  
Return Value
A value of the [IMTAttachment::EnFileFlags](imtattachment_enum.htm#enfileflags) enumeration.
IMTAttachment::FileFlags
Set the file flags.
C++
MTAPIRES IMTAttachment::FileFlags( const UINT type // File flags )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAttachment.FileFlags( uint type // File flags )  
---  
Parameters
type
[in] File flags. The flags are passed using the [IMTAttachment::EnFileFlags](imtattachment_enum.htm#enfileflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.