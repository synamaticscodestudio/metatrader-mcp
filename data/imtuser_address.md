# Address (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ Address | [](imtuser_zipcode.md "ZipCode") [](imtuser_phone.md "Phone") |
| --- | --- | --- |
| --- | --- |

IMTUser::Address
Get the address of a client.
C++
LPCWSTR IMTUser::Address() const  
---  
.NET (Gateway/Manager API)
string CIMTUser.Address()  
---  
Return Value
If successful, it returns a pointer to the string with the address. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTUser](imtuser.md "IMTUser") object.
To use the string after the object removal (call of the [IMTUser::Release](imtuser_release.md "Release") method of this object), a copy of it should be created.
IMTUser::Address
Set the address of a client.
C++
MTAPIRES IMTUser::Address( LPCWSTR code // Address )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.Address( string code // Address )  
---  
Parameters
code
[in] The address of a client.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum length of the address is 128 characters (including the sign of the string end). If a string of a greater length is assigned, it will be cut to this length.