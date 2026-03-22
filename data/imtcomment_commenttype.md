# CommentType (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTComment ](imtcomment.md "IMTComment")/ CommentType | [](imtcomment_text.md "Text") [](imtcomment_commentresult.md "CommentResult") |
| --- | --- | --- |
| --- | --- |

IMTComment::CommentType
Get the comment type.
C++
UINT IMTComment::CommentType() const  
---  
.NET (Gateway/Manager API)
uint CIMTComment.CommentType()  
---  
Return Value
A value of the [IMTComment::EnCommentType](imtcomment_enum.htm#encommenttype) enumeration.
IMTComment::CommentType
Set the comment type.
C++
MTAPIRES IMTComment::CommentType( const UINT type // Comment type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTComment.CommentType( uint type // Comment type )  
---  
Parameters
type
[in] Comment type. The comment type is passed using the [IMTComment::EnCommentType](imtcomment_enum.htm#encommenttype) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.