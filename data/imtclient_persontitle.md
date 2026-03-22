# PersonTitle (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ PersonTitle | [](imtclient_introducer.md "Introducer") [](imtclient_personname.md "PersonName") |
| --- | --- | --- |
| --- | --- |

IMTClient::PersonTitle
Get the client title, such as Mr. or Mrs.
C++
LPCWSTR IMTClient::PersonTitle() const  
---  
.NET (Gateway/Manager API)
string CIMTClient.PersonTitle()  
---  
Return Value
If successful, the method returns a pointer to a string with the title. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTClient](imtclient.md "IMTClient") object.
To be able to use the string after the object removal (call of the [IMTClient::Release](imtclient_release.md "Release") method of this object), a copy of it should be created.
IMTClient::PersonTitle
Set the client title, such as Mr. or Mrs.
C++
MTAPIRES IMTClient::PersonTitle( LPCWSTR title // Title )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.PersonTitle( string title  // Title )  
---  
Parameters
title
[in] Client title, such as Mr. or Mrs.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The title length is limited to 32 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.