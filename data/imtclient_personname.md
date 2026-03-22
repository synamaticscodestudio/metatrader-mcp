# PersonName (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ PersonName | [](imtclient_persontitle.md "PersonTitle") [](imtclient_personmiddlename.md "PersonMiddleName") |
| --- | --- | --- |
| --- | --- |

IMTClient::PersonName
Get the name of a client.
C++
LPCWSTR IMTClient::PersonName() const  
---  
.NET (Gateway/Manager API)
string CIMTClient.PersonName()  
---  
Return Value
If successful, a pointer to a string with the name is returned. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTClient](imtclient.md "IMTClient") object.
To be able to use the string after the object removal (call of the [IMTClient::Release](imtclient_release.md "Release") method of this object), a copy of it should be created.
IMTClient::PersonName
Set the name of a client.
C++
MTAPIRES IMTClient::PersonName( LPCWSTR name // Client name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.PersonName( string name  // Client name )  
---  
Parameters
name
[in] The name of a client.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The name length is limited to 32 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.