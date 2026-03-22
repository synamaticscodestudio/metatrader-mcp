# CompanyName (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ CompanyName | [](imtclient_personannualdeposit.md "PersonAnnualDeposit") [](imtclient_companyregnumber.md "CompanyRegNumber") |
| --- | --- | --- |
| --- | --- |

IMTClient::CompanyName
Get the company name (for corporate clients).
C++
LPCWSTR IMTClient::CompanyName() const  
---  
.NET (Gateway/Manager API)
string CIMTClient.CompanyName()  
---  
Return Value
If successful, a pointer to a string with the company name is returned. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTClient](imtclient.md "IMTClient") object.
To be able to use the string after the object removal (call of the [IMTClient::Release](imtclient_release.md "Release") method of this object), a copy of it should be created.
IMTClient::CompanyName
Set the company name (for corporate clients).
C++
MTAPIRES IMTClient::CompanyName( LPCWSTR name // Company name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.CompanyName( string name  // Company name )  
---  
Parameters
name
[in] Company name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The name length is limited to 64 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.