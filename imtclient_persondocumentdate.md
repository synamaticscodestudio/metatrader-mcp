# PersonDocumentDate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ PersonDocumentDate | [](imtclient_persondocumentnumber.md "PersonDocumentNumber") [](imtclient_persondocumentexpiration.md "PersonDocumentExpiration") |
| --- | --- | --- |
| --- | --- |

IMTClient::PersonDocumentDate
Get the issue date of the identification document (of passport, driver's license, etc.).
C++
INT64 IMTClient::PersonDocumentDate() const  
---  
.NET (Gateway/Manager API)
long CIMTClient.PersonDocumentDate()  
---  
Return Value
Document issue date in seconds since 01.01.1970.
IMTClient::PersonDocumentDate
Set the issue date of the identification document (of passport, driver's license, etc.).
C++
MTAPIRES IMTClient::PersonDocumentDate( const INT64 date // Date of issue )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.PersonDocumentDate( long date // Date of issue )  
---  
Parameters
date
[in] Document issue date in seconds since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.