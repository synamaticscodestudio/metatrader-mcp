# EMail (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ EMail | [](imtuser_phone.md "Phone") [](imtuser_id.md "ID") |
| --- | --- | --- |
| --- | --- |

IMTUser::EMail
Get the client's email address.
C++
LPCWSTR IMTUser::EMail() const  
---  
.NET (Gateway/Manager API)
string CIMTUser.EMail()  
---  
Return Value
If successful, it returns a pointer to a string with the email address. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTUser](imtuser.md "IMTUser") object.
To use the string after the object removal (call of the [IMTUser::Release](imtuser_release.md "Release") method of this object), a copy of it should be created.
IMTUser::EMail
Set the client's email address.
C++
MTAPIRES IMTUser::EMail( LPCWSTR email // email )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.EMail( string email // email )  
---  
Parameters
email
[in] The email address of a client.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The length of the address is limited to 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.