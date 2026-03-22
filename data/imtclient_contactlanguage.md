# ContactLanguage (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ ContactLanguage | [](imtclient_contactpreferred.md "ContactPreferred") [](imtclient_contactemail.md "ContactEmail") |
| --- | --- | --- |
| --- | --- |

IMTClient::ContactLanguage
Get the language spoken by the client.
C++
LPCWSTR IMTClient::ContactLanguage() const  
---  
.NET (Gateway/Manager API)
string CIMTClient.ContactLanguage()  
---  
Return Value
If successful, a pointer to a string with the language name is returned. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTClient](imtclient.md "IMTClient") object.
To be able to use the string after the object removal (call of the [IMTClient::Release](imtclient_release.md "Release") method of this object), a copy of it should be created.
IMTClient::ContactLanguage
Set the language spoken by the client.
C++
MTAPIRES IMTClient::ContactLanguage( LPCWSTR language // Client language )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.ContactLanguage( string language  // Client language )  
---  
Parameters
language
[in] The language spoken by the client.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The language is specified in the LANGID format used in [MS Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318693) systems (a value from Prim.lang.identifier).