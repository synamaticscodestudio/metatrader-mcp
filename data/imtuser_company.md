# Company (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ Company | [](imtuser_middlename.md "MiddleName") [](imtuser_account.md "Account") |
| --- | --- | --- |
| --- | --- |

IMTUser::Company
Get the name of a client's company.
C++
LPCWSTR IMTUser::Company() const  
---  
.NET (Gateway/Manager API)
string CIMTUser.Company()  
---  
Return Value
If successful, it returns a pointer to a string with the name of the company. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTUser](imtuser.md "IMTUser") object.
To use the string after the object removal (call of the [IMTUser::Release](imtuser_release.md "Release") method of this object), a copy of it should be created.
IMTUser::Company
Set the name of a client's company.
C++
MTAPIRES IMTUser::Company( LPCWSTR id // Company name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.Company( sting id // Company name )  
---  
Parameters
id
[in] The name of a client's company.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum length of the company name is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.