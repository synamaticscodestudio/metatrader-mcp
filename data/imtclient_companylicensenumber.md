# CompanyLicenseNumber (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ CompanyLicenseNumber | [](imtclient_companylei.md "CompanyLei") [](imtclient_companylicenseauthority.md "CompanyLicenseAuthority") |
| --- | --- | --- |
| --- | --- |

IMTClient::CompanyLicenseNumber
Get the license number (for corporate clients).
C++
LPCWSTR IMTClient::CompanyLicenseNumber() const  
---  
.NET (Gateway/Manager API)
string CIMTClient.CompanyLicenseNumber()  
---  
Return Value
If successful, a pointer to a string with the LEI number is returned. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTClient](imtclient.md "IMTClient") object.
To be able to use the string after the object removal (call of the [IMTClient::Release](imtclient_release.md "Release") method of this object), a copy of it should be created.
IMTClient::CompanyLicenseNumber
Set the license number (for corporate clients).
C++
MTAPIRES IMTClient::CompanyLicenseNumber( LPCWSTR number // License number )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.CompanyLicenseNumber( string number  // License number )  
---  
Parameters
number
[in] License number.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The number length is limited to 32 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.