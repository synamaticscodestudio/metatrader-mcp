# Extra (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTComment ](imtcomment.md "IMTComment")/ Extra | [](imtcomment_flags.md "Flags") [](imtcomment_text.md "Text") |
| --- | --- | --- |
| --- | --- |

Extra
Get additional information about the comment.
C++
LPCWSTR IMTComment::Text() const  
---  
.NET (Gateway/Manager API)
string CIMTComment.Text()  
---  
Return Value
If successful, the method returns a pointer to a string with information. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTComment](imtcomment.md "IMTComment") object.
To use the string after the object removal (call of the [IMTComment::Release](imtcomment_release.md "Release") method of this object), a copy of it should be created.
IMTComment::Text
Set additional information for the comment.
C++
MTAPIRES IMTComment::Text( LPCWSTR extra // Additional information )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTComment.Text( string extra  // Additional information )  
---  
Parameters
extra
[in] Additional information.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The IMTComment::Extra field can be used for adding additional information to a comment. For example, you can indicate a phone number on which the call was made.
The string length is limited 32 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.