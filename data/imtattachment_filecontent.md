# FileContent (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTAttachment ](imtattachment.md "IMTAttachment")/ FileContent | [](imtattachment_filename.md "FileName") [](imtattachment_filesize.md "FileSize") |
| --- | --- | --- |
| --- | --- |

IMTAttachment::FileContent
Get the attached file contents.
C++
const void* IMTAttachment::FileContent() const  
---  
.NET (Gateway/Manager API)
byte[] CIMTAttachment.FileContent()  
---  
Return Value
If successful, a pointer to the file contents is returned. Otherwise, NULL is returned.
Note
The returned pointer is valid until the object is destroyed by calling the [IMTAttachment::Release](imtattachment_release.md "Release") method or another object controlling method ([IMTAttachment::Clear](imtattachment_clear.md "Clear")).
IMTAttachment::FileContent
Set the attached file contents.
C++
MTAPIRES IMTAttachment::FileContent( const void* content, // A pointer to the file contents const UINT content_size // Contents size )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAttachment.FileContent( byte[] content // File contents )  
---  
Parameters
content
[in] A pointer to the file contents.
content_size
[in] File contents size.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Data in [text type files](imtattachment_enum.htm#enfiletype) must be presented in the UTF-16 Little Endian encoding. The use of other encodings is not allowed.