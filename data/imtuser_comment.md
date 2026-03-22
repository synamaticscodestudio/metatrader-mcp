# Comment (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ Comment | [](imtuser_status.md "Status") [](imtuser_color.md "Color") |
| --- | --- | --- |
| --- | --- |

IMTUser::Comment
Get a comment to a client.
C++
LPCWSTR IMTUser::Comment() const  
---  
.NET (Gateway/Manager API)
string CIMTUser.Comment()  
---  
Return Value
If successful, it returns a pointer to a string with a comment to the client. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTUser](imtuser.md "IMTUser") object.
To use the string after the object removal (call of the [IMTUser::Release](imtuser_release.md "Release") method of this object), a copy of it should be created.
IMTUser::Comment
Set a comment to a client.
C++
MTAPIRES IMTUser::Comment( LPCWSTR comment // Comment )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.Comment( string comment // Comment )  
---  
Parameters
comment
[in] A comment to a client.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum comment length is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.