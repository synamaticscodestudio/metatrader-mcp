# PersonDocumentExpiration (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ PersonDocumentExpiration | [](imtclient_persondocumentdate.md "PersonDocumentDate") [](imtclient_persondocumentextra.md "PersonDocumentExtra") |
| --- | --- | --- |
| --- | --- |

IMTClient::PersonDocumentExpiration
Get the expiration date of the identification document (of passport, driver's license, etc.).
C++
INT64 IMTClient::PersonDocumentExpiration() const  
---  
.NET (Gateway/Manager API)
long CIMTClient.PersonDocumentExpiration()  
---  
Return Value
Document expiration date in seconds since 01.01.1970.
IMTClient::PersonDocumentExpiration
Set the expiration date of the identification document (of passport, driver's license, etc.).
C++
MTAPIRES IMTClient::PersonDocumentExpiration( const INT64 date // Expiration date )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.PersonDocumentExpiration( long date // Expiration date )  
---  
Parameters
date
[in] Document expiration date in seconds since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.