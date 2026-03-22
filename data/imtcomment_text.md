# Text (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTComment ](imtcomment.md "IMTComment")/ Text | [](imtcomment_extra.md "Extra") [](imtcomment_commenttype.md "CommentType") |
| --- | --- | --- |
| --- | --- |

IMTComment::Text
Get the comment text.
C++
LPCWSTR IMTComment::Text() const  
---  
.NET (Gateway/Manager API)
string CIMTComment.Text()  
---  
Return Value
If successful, a pointer to the string with a text is returned. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTComment](imtcomment.md "IMTComment") object.
To use the string after the object removal (call of the [IMTComment::Release](imtcomment_release.md "Release") method of this object), a copy of it should be created.
IMTComment::Text
Set the comment text.
C++
MTAPIRES IMTComment::Text( LPCWSTR text // Comment text )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTComment.Text( string text  // Comment text )  
---  
Parameters
text
[in] Comment text.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Text length is not limited.