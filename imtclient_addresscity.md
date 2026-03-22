# AddressCity (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ AddressCity | [](imtclient_addressstate.md "AddressState") [](imtclient_experiencefx.md "ExperienceFX") |
| --- | --- | --- |
| --- | --- |

IMTClient::AddressCity
Get the client's city of residence.
C++
LPCWSTR IMTClient::AddressCity() const  
---  
.NET (Gateway/Manager API)
string CIMTClient.AddressCity()  
---  
Return Value
If successful, it returns a pointer to a string with the client's city. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTClient](imtclient.md "IMTClient") object.
To be able to use the string after the object removal (call of the [IMTClient::Release](imtclient_release.md "Release") method of this object), a copy of it should be created.
IMTClient::AddressCity
Set the client's city of residence.
C++
MTAPIRES IMTClient::AddressCity( LPCWSTR city // City )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.AddressCity( string city  // City )  
---  
Parameters
city
[in] The client's city of residence.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The city name length is limited to 64 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.