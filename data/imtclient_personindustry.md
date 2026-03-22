# PersonIndustry (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ PersonIndustry | [](imtclient_personemployment.md "PersonEmployment") [](imtclient_personeducation.md "PersonEducation") |
| --- | --- | --- |
| --- | --- |

IMTClient::PersonIndustry
Get the client's employment industry.
C++
UINT IMTClient::PersonIndustry() const  
---  
.NET (Gateway/Manager API)
uint CIMTClient.PersonIndustry()  
---  
Return Value
A value of the [IMTClient::EnEmploymentIndustry](imtclient_enum.htm#enemploymentindustry) enumeration.
IMTClient::PersonIndustry
Set the client's employment industry.
C++
MTAPIRES IMTClient::PersonIndustry( const UINT industry // Employment industry )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.PersonIndustry( uint industry // Employment industry )  
---  
Parameters
industry
[in] Client's employment industry. The value is passed using the [IMTClient::EnEmploymentIndustry](imtclient_enum.htm#enemploymentindustry) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.