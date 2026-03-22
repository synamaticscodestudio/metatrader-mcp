# PersonAnnualDeposit (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ PersonAnnualDeposit | [](imtclient_personnetworth.md "PersonNetWorth") [](imtclient_companyname.md "CompanyName") |
| --- | --- | --- |
| --- | --- |

IMTClient::PersonAnnualDeposit
Get the amount of the client's annual deposit.
C++
double IMTClient::PersonAnnualDeposit() const  
---  
.NET (Gateway/Manager API)
double CIMTClient.PersonAnnualDeposit()  
---  
Return Value
Client's annual deposit in USD.
IMTClient::PersonAnnualDeposit
Set the amount of the client's annual deposit.
C++
MTAPIRES IMTClient::PersonAnnualDeposit( const double deposit // Annual deposit )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.PersonAnnualDeposit( double deposit // Annual deposit )  
---  
Parameters
deposit
[in] Client's annual deposit in USD.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.