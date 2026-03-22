# CompanyRegAuthority (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ CompanyRegAuthority | [](imtclient_companyregdate.md "CompanyRegDate") [](imtclient_companyvat.md "CompanyVat") |
| --- | --- | --- |
| --- | --- |

IMTClient::CompanyRegAuthority
Get the name of the registration authority with which the company was registered (for corporate body).
C++
LPCWSTR IMTClient::CompanyRegAuthority() const  
---  
.NET (Gateway/Manager API)
string CIMTClient.CompanyRegAuthority()  
---  
Return Value
If successful, it returns a pointer to a string with the name of the registration authority. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTClient](imtclient.md "IMTClient") object.
To be able to use the string after the object removal (call of the [IMTClient::Release](imtclient_release.md "Release") method of this object), a copy of it should be created.
IMTClient::CompanyRegAuthority
Set the name of the registration authority with which the company was registered (for corporate body).
C++
MTAPIRES IMTClient::CompanyRegAuthority( LPCWSTR authority // Registration authority )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.CompanyRegAuthority( string authority  // Registration authority )  
---  
Parameters
authority
[in] Registration authority.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The name length is limited to 64 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.