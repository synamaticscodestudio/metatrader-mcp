# ContactPhone (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ ContactPhone | [](imtclient_contactemail.md "ContactEmail") [](imtclient_contactmessengers.md "ContactMessengers") |
| --- | --- | --- |
| --- | --- |

IMTClient::ContactPhone
Get a client's phone number.
C++
LPCWSTR IMTClient::ContactEmail() const  
---  
.NET (Gateway/Manager API)
string CIMTClient.ContactEmail()  
---  
Return Value
If successful, a pointer to the string with the phone number is returned. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTClient](imtclient.md "IMTClient") object.
To be able to use the string after the object removal (call of the [IMTClient::Release](imtclient_release.md "Release") method of this object), a copy of it should be created.
IMTClient::ContactEmail
Set a client's phone number.
C++
MTAPIRES IMTClient::ContactEmail( LPCWSTR phone // Phone number )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.ContactEmail( string phone  // Phone )  
---  
Parameters
email
[in] Client's phone number.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The phone number length is limited to 32 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.