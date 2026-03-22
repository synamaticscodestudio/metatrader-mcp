# ZipCode (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ ZipCode | [](imtuser_state.md "State") [](imtuser_address.md "Address") |
| --- | --- | --- |
| --- | --- |

IMTUser::ZIPCode
Gets a client's zip code.
C++
LPCWSTR IMTUser::ZIPCode() const  
---  
.NET (Gateway/Manager API)
string CIMTUser.ZIPCode()  
---  
Return Value
If successful, it returns a pointer to a string with a zip code. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTUser](imtuser.md "IMTUser") object.
To use the string after the object removal (call of the [IMTUser::Release](imtuser_release.md "Release") method of this object), a copy of it should be created.
IMTUser::ZIPCode
Set a client's zip code.
C++
MTAPIRES IMTUser::ZIPCode( LPCWSTR code // Zip code )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.ZIPCode( string code // Zip code )  
---  
Parameters
code
[in] Client's zip code.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The length of the zip is limited to 16 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.