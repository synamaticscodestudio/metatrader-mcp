# ID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ ID | [](imtuser_email.md "EMail") [](imtuser_mqid.md "MQID") |
| --- | --- | --- |
| --- | --- |

IMTUser::ID
Get the number of a client's identity document. For example, passport number.
C++
LPCWSTR IMTUser::ID() const  
---  
.NET (Gateway/Manager API)
string CIMTUser.ID()  
---  
Return Value
If successful, it returns a pointer to a string with the document number. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTUser](imtuser.md "IMTUser") object.
To use the string after the object removal (call of the [IMTUser::Release](imtuser_release.md "Release") method of this object), a copy of it should be created.
IMTUser::ID
Set the number of a client's identity document. For example, passport number.
C++
MTAPIRES IMTUser::ID( LPCWSTR email // Document number )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.ID( string email // Document number )  
---  
Parameters
email
[in] The number of a client's identity document.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The ID length is limited to 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.