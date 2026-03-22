# PersonWealthSource (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ PersonWealthSource | [](imtclient_personeducation.md "PersonEducation") [](imtclient_personannualincome.md "PersonAnnualIncome") |
| --- | --- | --- |
| --- | --- |

IMTClient::PersonWealthSource
Get the client's income source.
C++
UINT IMTClient::PersonWealthSource() const  
---  
.NET (Gateway/Manager API)
uint CIMTClient.PersonWealthSource()  
---  
Return Value
A value from the [IMTClient::EnWealthSource](imtclient_enum.htm#enwealthsource) enumeration.
IMTClient::PersonWealthSource
Set the client's income source.
C++
MTAPIRES IMTClient::PersonWealthSource( const UINT source // Source of income )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.PersonWealthSource( uint source // Source of income )  
---  
Parameters
source
[in] Client's source of income. The value is passed using the [IMTClient::EnWealthSource](imtclient_enum.htm#enwealthsource) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.