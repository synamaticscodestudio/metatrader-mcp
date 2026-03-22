# ContactSocialNetworks (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ ContactSocialNetworks | [](imtclient_contactmessengers.md "ContactMessengers") [](imtclient_contactlastdate.md "ContactLastDate") |
| --- | --- | --- |
| --- | --- |

IMTClient::ContactSocialNetworks
Get the list of the client's accounts in social media.
C++
LPCWSTR IMTClient::ContactSocialNetworks() const  
---  
.NET (Gateway/Manager API)
string CIMTClient.ContactSocialNetworks()  
---  
Return Value
If successful, a pointer to a string with the list of accounts is returned. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTClient](imtclient.md "IMTClient") object.
To be able to use the string after the object removal (call of the [IMTClient::Release](imtclient_release.md "Release") method of this object), a copy of it should be created.
IMTClient::ContactSocialNetworks
Set the list of the client's accounts in social media.
C++
MTAPIRES IMTClient::ContactSocialNetworks( LPCWSTR social_networks // Social media )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.ContactSocialNetworks( string social_networks // Social media )  
---  
Parameters
messengers
[in] List of the client's accounts in social networks.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The length of the accounts list is limited to 128 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.
Accounts should be indicated in an understandable way, for example: facebook:username, twitter:username.