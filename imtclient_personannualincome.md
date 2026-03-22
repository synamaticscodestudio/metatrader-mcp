# PersonAnnualIncome (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ PersonAnnualIncome | [](imtclient_personwealthsource.md "PersonWealthSource") [](imtclient_personnetworth.md "PersonNetWorth") |
| --- | --- | --- |
| --- | --- |

IMTClient::PersonAnnualIncome
Get the client's annual income amount
C++
double IMTClient::PersonAnnualIncome() const  
---  
.NET (Gateway/Manager API)
double CIMTClient.PersonAnnualIncome()  
---  
Return Value
Client's annual income in USD.
IMTClient::PersonAnnualIncome
Set the client's annual income amount
C++
MTAPIRES IMTClient::PersonAnnualIncome( const double income // Annual income )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.PersonAnnualIncome( double income // Annual income )  
---  
Parameters
income
[in] Client's annual income in USD.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.