# PersonDocumentNumber (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ PersonDocumentNumber | [](imtclient_persondocumenttype.md "PersonDocumentType") [](imtclient_persondocumentdate.md "PersonDocumentDate") |
| --- | --- | --- |
| --- | --- |

IMTClient::PersonDocumentNumber
Get the number of the identification document (of passport, driver's license, etc.).
C++
LPCWSTR IMTClient::PersonDocumentNumber() const  
---  
.NET (Gateway/Manager API)
string CIMTClient.PersonDocumentNumber()  
---  
Return Value
If successful, a pointer to a string with the document number is returned. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTClient](imtclient.md "IMTClient") object.
To be able to use the string after the object removal (call of the [IMTClient::Release](imtclient_release.md "Release") method of this object), a copy of it should be created.
IMTClient::PersonDocumentNumber
Set the number of the identification document (of passport, driver's license, etc.).
C++
MTAPIRES IMTClient::PersonDocumentNumber( LPCWSTR number // Document number )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.PersonDocumentNumber( string number // Document number )  
---  
Parameters
number
[in] Identification document number.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The document number length is limited to 32 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.