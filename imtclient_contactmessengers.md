# ContactMessengers (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ ContactMessengers | [](imtclient_contactphone.md "ContactPhone") [](imtclient_contactsocialnetworks.md "ContactSocialNetworks") |
| --- | --- | --- |
| --- | --- |

IMTClient::ContactMessengers
Get the list of the client's accounts in instant messengers.
C++
LPCWSTR IMTClient::ContactMessengers() const  
---  
.NET (Gateway/Manager API)
string CIMTClient.ContactMessengers()  
---  
Return Value
If successful, a pointer to a string with the list of accounts is returned. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTClient](imtclient.md "IMTClient") object.
To be able to use the string after the object removal (call of the [IMTClient::Release](imtclient_release.md "Release") method of this object), a copy of it should be created.
IMTClient::ContactMessengers
Set the list of the client's accounts in instant messengers.
C++
MTAPIRES IMTClient::ContactMessengers( LPCWSTR messengers // Instant messengers )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.ContactMessengers( string messengers  // Instant messengers )  
---  
Parameters
messengers
[in] The list of the client's accounts in instant messengers.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The length of the accounts list is limited to 128 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.
Accounts should be indicated in an understandable way, for example: skype:username, whatsapp:username.