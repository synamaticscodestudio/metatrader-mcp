# MiddleName (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ MiddleName | [](imtuser_lastname.md "LastName") [](imtuser_company.md "Company") |
| --- | --- | --- |
| --- | --- |

IMTUser::MiddleName
Get the client's middle name.
C++
LPCWSTR IMTUser::MiddleName() const  
---  
.NET (Gateway/Manager API)
string CIMTUser.MiddleName()  
---  
Return Value
If successful, it returns a pointer to a string with the client's middle name. Otherwise NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTUser](imtuser.md "IMTUser") object.
To use the string after the object removal (call of the [IMTUser::Release](imtuser_release.md "Release") method of this object), a copy of it should be created.
IMTUser::MiddleName
Set the client's middle name.
C++
MTAPIRES IMTUser::MiddleName( LPCWSTR middle_name // Client's middle name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.MiddleName( string middle_name // Client's middle name )  
---  
Parameters
name
[in] Client's middle name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The maximum middle name length is limited to 128 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.