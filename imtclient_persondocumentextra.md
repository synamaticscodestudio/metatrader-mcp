# PersonDocumentExtra (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ PersonDocumentExtra | [](imtclient_persondocumentexpiration.md "PersonDocumentExpiration") [](imtclient_personemployment.md "PersonEmployment") |
| --- | --- | --- |
| --- | --- |

IMTClient::PersonDocumentExtra
Get additional information (comment) to the identification document.
C++
LPCWSTR IMTClient::PersonDocumentExtra() const  
---  
.NET (Gateway/Manager API)
string CIMTClient.PersonDocumentExtra()  
---  
Return Value
If successful, a pointer to a string with the additional document data is returned. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTClient](imtclient.md "IMTClient") object.
To be able to use the string after the object removal (call of the [IMTClient::Release](imtclient_release.md "Release") method of this object), a copy of it should be created.
IMTClient::PersonDocumentExtra
Set additional information (comment) to the identification document.
C++
MTAPIRES IMTClient::PersonDocumentExtra( LPCWSTR extra // Document information )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.PersonDocumentExtra( string extra // Document information )  
---  
Parameters
extra
[in] Additional information about the document.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The data length is limited to 64 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.