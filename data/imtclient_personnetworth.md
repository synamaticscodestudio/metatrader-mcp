# PersonNetWorth (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ PersonNetWorth | [](imtclient_personannualincome.md "PersonAnnualIncome") [](imtclient_personannualdeposit.md "PersonAnnualDeposit") |
| --- | --- | --- |
| --- | --- |

IMTClient::PersonAnnualIncome
Get the amount of the client's net assets.
C++
double IMTClient::PersonNetWorth() const  
---  
.NET (Gateway/Manager API)
double CIMTClient.PersonNetWorth()  
---  
Return Value
Client's net assets in USD.
IMTClient::PersonNetWorth
Set the amount of the client's net assets.
C++
MTAPIRES IMTClient::PersonNetWorth( const double worth // Net assets )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.PersonNetWorth( double worth // Net assets )  
---  
Parameters
worth
[in] Client's net assets in USD.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.