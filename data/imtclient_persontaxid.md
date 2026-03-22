# PersonTaxID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ PersonTaxID | [](imtclient_persongender.md "PersonGender") [](imtclient_persondocumenttype.md "PersonDocumentType") |
| --- | --- | --- |
| --- | --- |

IMTClient::PersonTaxID
Get the client's tax ID, for example TIN.
C++
LPCWSTR IMTClient::PersonTaxID() const  
---  
.NET (Gateway/Manager API)
string CIMTClient.PersonTaxID()  
---  
Return Value
If successful, a pointer to a string with the tax payer ID is returned. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTClient](imtclient.md "IMTClient") object.
To be able to use the string after the object removal (call of the [IMTClient::Release](imtclient_release.md "Release") method of this object), a copy of it should be created.
IMTClient::PersonTaxID
Set the client's tax ID, for example TIN.
C++
MTAPIRES IMTClient::PersonTaxID( LPCWSTR taxid // Tax ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.PersonTaxID( string taxid // Tax ID )  
---  
Parameters
taxid
[in] Tax ID.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The ID length is limited to 64 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.