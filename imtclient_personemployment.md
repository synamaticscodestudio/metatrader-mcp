# PersonEmployment (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ PersonEmployment | [](imtclient_persondocumentextra.md "PersonDocumentExtra") [](imtclient_personindustry.md "PersonIndustry") |
| --- | --- | --- |
| --- | --- |

IMTClient::PersonEmployment
Get the client's employment status.
C++
UINT IMTClient::PersonEmployment() const  
---  
.NET (Gateway/Manager API)
uint CIMTClient.PersonEmployment()  
---  
Return Value
A value from the [IMTClient::EnEmployment](imtclient_enum.htm#enemployment) enumeration.
IMTClient::PersonEmployment
Set the client's employment status.
C++
MTAPIRES IMTClient::PersonEmployment( const UINT employment // Employment )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.PersonEmployment( uint employment // Employment )  
---  
Parameters
employment
[in] Client's employment status. The status is passed using the [IMTClient::EnEmployment](imtclient_enum.htm#enemployment) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.