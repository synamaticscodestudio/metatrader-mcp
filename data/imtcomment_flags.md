# Flags (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTComment ](imtcomment.md "IMTComment")/ Flags | [](imtcomment_relateddocument.md "RelatedDocument") [](imtcomment_extra.md "Extra") |
| --- | --- | --- |
| --- | --- |

IMTComment::Flags
Get comment flags.
C++
UINT64 IMTComment::Flags() const  
---  
.NET (Gateway/Manager API)
ulong CIMTComment.Flags()  
---  
Return Value
Comment flags. The flags are passed using the [IMTComment::EnCommentFlags](imtcomment_enum.htm#encommentflags) enumeration.
Note
This method is reserved for future use.
IMTComment::Flags
Set comment flags.
C++
MTAPIRES IMTComment::Flags( const UINT64 flags // Comment flags )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTComment.Flags( ulong flags // Comment flags )  
---  
Parameters
flags
[in] Comment flags. The flags are passed using the [IMTComment::EnCommentFlags](imtcomment_enum.htm#encommentflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.