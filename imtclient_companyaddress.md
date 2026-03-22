# CompanyAddress (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ CompanyAddress | [](imtclient_companycountry.md "CompanyCountry") [](imtclient_companywebsite.md "CompanyWebsite") |
| --- | --- | --- |
| --- | --- |

IMTClient::CompanyAddress
Get the company's legal address (for corporate clients).
C++
LPCWSTR IMTClient::CompanyAddress() const  
---  
.NET (Gateway/Manager API)
string CIMTClient.CompanyAddress()  
---  
Return Value
If successful, the method returns a pointer to a string with the address. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTClient](imtclient.md "IMTClient") object.
To be able to use the string after the object removal (call of the [IMTClient::Release](imtclient_release.md "Release") method of this object), a copy of it should be created.
IMTClient::CompanyAddress
Set the company's legal address (for corporate clients).
C++
MTAPIRES IMTClient::CompanyAddress( LPCWSTR address // Legal address )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.CompanyAddress( string address  // Legal address )  
---  
Parameters
address
[in] Company's legal address.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The address length is limited to 64 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.