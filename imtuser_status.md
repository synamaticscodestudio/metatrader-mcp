# Status (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ Status | [](imtuser_visitorid.md "VisitorID") [](imtuser_comment.md "Comment") |
| --- | --- | --- |
| --- | --- |

IMTUser::Status
Get a client's status.
C++
LPCWSTR IMTUser::Status() const  
---  
.NET (Gateway/Manager API)
string CIMTUser.Status()  
---  
Return Value
If successful, it returns a pointer to a string with the status of a client. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTUser](imtuser.md "IMTUser") object.
To use the string after the object removal (call of the [IMTUser::Release](imtuser_release.md "Release") method of this object), a copy of it should be created.
IMTUser::Status
Set a client's status.
C++
MTAPIRES IMTUser::Status( LPCWSTR id // Status )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.Status( string id // Status )  
---  
Parameters
id
[in] The status of a client.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The length of the status is limited to 16 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.