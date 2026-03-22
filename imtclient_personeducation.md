# PersonEducation (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ PersonEducation | [](imtclient_personindustry.md "PersonIndustry") [](imtclient_personwealthsource.md "PersonWealthSource") |
| --- | --- | --- |
| --- | --- |

IMTClient::PersonEducation
Get the client's education level.
C++
UINT IMTClient::PersonEducation() const  
---  
.NET (Gateway/Manager API)
uint CIMTClient.PersonEducation()  
---  
Return Value
A value from the [IMTClient::EnEducationLevel](imtclient_enum.htm#eneducationlevel) enumeration.
IMTClient::PersonEducation
Set the client's education level.
C++
MTAPIRES IMTClient::PersonEducation( const UINT education // Client's education )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.PersonEducation( uint education // Client's education )  
---  
Parameters
education
[in] Client's education level. The value is passed using the [IMTClient::EnEducationLevel](imtclient_enum.htm#eneducationlevel) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.