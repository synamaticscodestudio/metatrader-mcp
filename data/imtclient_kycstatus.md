# KYCStatus (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ KYCStatus | [](imtclient_clientstatus.md "ClientStatus") [](imtclient_assignedmanager.md "AssignedManager") |
| --- | --- | --- |
| --- | --- |

IMTClient::KYCStatus
Get the [KYC verification](config_kyc.md "KYC") status for a client.
C++
UINT IMTClient::KYCStatus() const  
---  
.NET (Gateway/Manager API)
uint CIMTClient.KYCStatus()  
---  
Return Value
A value from the [IMTClient::EnKYCStatus](imtclient_enum.htm#enkycstatus) enumeration.
IMTClient::KYCStatus
Set the [KYC verification](config_kyc.md "KYC") status for a client.
C++
MTAPIRES IMTClient::KYCStatus( const UINT status // Verification status )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.KYCStatus( uint status // Verification status )  
---  
Parameters
status
[in] KYC verification status. The status is passed using the [IMTClient::EnKYCStatus](imtclient_enum.htm#enkycstatus) enumeration value.
Return Value
An indication of success is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred and the corresponding code is returned.