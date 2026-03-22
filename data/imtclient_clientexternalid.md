# ClientExternalID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ ClientExternalID | [](imtclient_clientoriginlogin.md "ClientOriginLogin") [](imtclientarray.md "IMTClientArray") |
| --- | --- | --- |
| --- | --- |

IMTClient::ClientExternalID
Get the client ID in an external trading system.
C++
LPCWSTR IMTClient::ClientExternalID() const  
---  
.NET (Gateway/Manager API)
string CIMTClient.ClientExternalID()  
---  
Return Value
If successful, the method returns a pointer to the string with the identifier. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTClient](imtclient.md "IMTClient") object.
To be able to use the string after the object removal (call of the [IMTClient::Release](imtclient_release.md "Release") method of this object), a copy of it should be created.
Use this field for integration and creating reports using API.
IMTClient::ClientExternalID
Set the client ID in an external trading system.
C++
MTAPIRES IMTClient::ClientExternalID( LPCWSTR external_id // ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.ClientExternalID( string external_id // ID )  
---  
Parameters
external_id
[in] Client ID in the external trading system.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The ID length is limited to 64 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.
Use this field for integration and creating reports using API.