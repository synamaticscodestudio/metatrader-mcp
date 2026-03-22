# FileName (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTAttachment ](imtattachment.md "IMTAttachment")/ FileName | [](imtattachment_filetype.md "FileType") [](imtattachment_filecontent.md "FileContent") |
| --- | --- | --- |
| --- | --- |

IMTAttachment::FileName
Get the file name.
C++
LPCWSTR IMTAttachment::FileName() const  
---  
.NET (Gateway/Manager API)
string CIMTAttachment.FileName()  
---  
Return Value
If successful, a pointer to a string with the file name is returned. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTAttachment](imtattachment.md "IMTAttachment") object.
To use the string after the object removal (call of the [IMTAttachment::Release](imtattachment_release.md "Release") method of this object), a copy of it should be created.
IMTAttachment::FileName
Set the file name.
C++
MTAPIRES IMTAttachment::FileName( LPCWSTR name // File name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAttachment.FileName( string name // File name )  
---  
Parameters
name
[in] File name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The file name length is limited to 32 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.