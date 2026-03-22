# LastName (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ LastName | [](imtuser_firstname.md "FirstName") [](imtuser_middlename.md "MiddleName") |
| --- | --- | --- |
| --- | --- |

IMTUser::LastName
Get the client's last name.
C++
LPCWSTR IMTUser::LastName() const  
---  
.NET (Gateway/Manager API)
string CIMTUser.LastName()  
---  
Return Value
If successful, it returns a pointer to a string with the client's last name. Otherwise NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTUser](imtuser.md "IMTUser") object.
To use the string after the object removal (call of the [IMTUser::Release](imtuser_release.md "Release") method of this object), a copy of it should be created.
IMTUser::LastName
Set the client's last name.
C++
MTAPIRES IMTUser::LastName( LPCWSTR last_name // Client's last name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.LastName( string last_name // Client's last name )  
---  
Parameters
name
[in] Client's last name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The maximum last name length is limited to 128 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.