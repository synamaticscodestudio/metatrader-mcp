# CommentResult (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTComment ](imtcomment.md "IMTComment")/ CommentResult | [](imtcomment_commenttype.md "CommentType") [](imtcomment_attachmentsadd.md "AttachmentsAdd") |
| --- | --- | --- |
| --- | --- |

CommentResult
Get a call result from a comment.
C++
UINT IMTComment::CommentType() const  
---  
.NET (Gateway/Manager API)
uint CIMTComment.CommentType()  
---  
Return Value
A value of the [IMTComment::EnCommentResult](imtcomment_enum.htm#encommentresult) enumeration.
IMTComment::CommentType
Set a call result for a comment.
C++
MTAPIRES IMTComment::CommentType( const UINT result // Result )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTComment.CommentType( uint result // Result )  
---  
Parameters
result
[in] Call result. The value is passed using the [IMTComment::EnCommentResult](imtcomment_enum.htm#encommentresult) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This field is used to indicate additional information when adding a comment to a client’s history after making a call.