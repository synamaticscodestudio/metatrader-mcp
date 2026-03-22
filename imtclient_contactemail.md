# ContactEmail (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ ContactEmail | [](imtclient_contactlanguage.md "ContactLanguage") [](imtclient_contactphone.md "ContactPhone") |
| --- | --- | --- |
| --- | --- |

IMTClient::ContactEmail
Get the client's email address.
C++
LPCWSTR IMTClient::ContactEmail() const  
---  
.NET (Gateway/Manager API)
string CIMTClient.ContactEmail()  
---  
Return Value
If successful, the method returns a pointer to a string with the address. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTClient](imtclient.md "IMTClient") object.
To be able to use the string after the object removal (call of the [IMTClient::Release](imtclient_release.md "Release") method of this object), a copy of it should be created.
IMTClient::ContactEmail
Set the client's email address.
C++
MTAPIRES IMTClient::ContactEmail( LPCWSTR email // Email address )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.ContactEmail( string email  // Email address )  
---  
Parameters
email
[in] The email address of a client.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The address length is limited to 64 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.