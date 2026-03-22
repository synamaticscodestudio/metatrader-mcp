# Account (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ Account | [](imtuser_company.md "Company") [](imtuser_country.md "Country") |
| --- | --- | --- |
| --- | --- |

IMTUser::Account
Get the number of a client's account in an external trading system.
C++
LPCWSTR IMTUser::Account() const  
---  
.NET (Gateway/Manager API)
string CIMTUser.Account()  
---  
Return Value
If successful, it returns a pointer to a string with the account number. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTUser](imtuser.md "IMTUser") object.
To use the string after the object removal (call of the [IMTUser::Release](imtuser_release.md "Release") method of this object), a copy of it should be created.
IMTUser::Account
Set the number of a client's account in an external trading system.
C++
MTAPIRES IMTUser::Account( LPCWSTR account // Account number )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.Account( string account // Account number )  
---  
Parameters
account
[in] The number of a client's account in an external trading system.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum length of the account number is 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.