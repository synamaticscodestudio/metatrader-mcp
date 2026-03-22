# State (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ State | [](imtuser_city.md "City") [](imtuser_zipcode.md "ZipCode") |
| --- | --- | --- |
| --- | --- |

IMTUser::State
Get a client's state (region) of residence.
C++
LPCWSTR IMTUser::State() const  
---  
.NET (Gateway/Manager API)
string CIMTUser.State()  
---  
Return Value
If successful, it returns a pointer to the string with the state of residence. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTUser](imtuser.md "IMTUser") object.
To use the string after the object removal (call of the [IMTUser::Release](imtuser_release.md "Release") method of this object), a copy of it should be created.
IMTUser::State
Set a client's state (region) of residence.
C++
MTAPIRES IMTUser::State( LPCWSTR state // State )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.State( string state // State )  
---  
Parameters
state
[in] The client's state (region) of residence.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The state name length is limited to 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.