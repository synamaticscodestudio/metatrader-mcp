# City (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ City | [](imtuser_language.md "Language") [](imtuser_state.md "State") |
| --- | --- | --- |
| --- | --- |

IMTUser::City
Get the client's city of residence.
C++
LPCWSTR IMTUser::City() const  
---  
.NET (Gateway/Manager API)
string CIMTUser.City()  
---  
Return Value
If successful, it returns a pointer to a string with the client's city. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTUser](imtuser.md "IMTUser") object.
To use the string after the object removal (call of the [IMTUser::Release](imtuser_release.md "Release") method of this object), a copy of it should be created.
IMTUser::City
Set the client's city of residence.
C++
MTAPIRES IMTUser::City( LPCWSTR city // City )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.City( string city // City )  
---  
Parameters
city
[in] The client's city of residence.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The city name length is limited to 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.