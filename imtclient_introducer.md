# Introducer (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ Introducer | [](imtclient_leadsource.md "LeadSource") [](imtclient_persontitle.md "PersonTitle") |
| --- | --- | --- |
| --- | --- |

IMTClient::Introducer
Get the login (trading account) of the user who introduced this client.
C++
LPCWSTR IMTClient::Introducer() const  
---  
.NET (Gateway/Manager API)
string CIMTClient.Introducer()  
---  
Return Value
If successful, the method returns a pointer to a string with the login. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTClient](imtclient.md "IMTClient") object.
To be able to use the string after the object removal (call of the [IMTClient::Release](imtclient_release.md "Release") method of this object), a copy of it should be created.
IMTClient::Introducer
Set the login (trading account) of the user who introduced this client.
C++
MTAPIRES IMTClient::Introducer( LPCWSTR introducer // Source )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.Introducer( string introducer  // Source )  
---  
Parameters
introducer
[in] The login (trading account) of the user who attracted this client.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The login length is limited to 32 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.