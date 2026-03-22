# ComplianceDateApproval (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ ComplianceDateApproval | [](imtclient_complianceclientcategory.md "ComplianceClientCategory") [](imtclient_compliancedatetermination.md "ComplianceDateTermination") |
| --- | --- | --- |
| --- | --- |

IMTClient::ComplianceDateApproval
Get the client approval date.
C++
INT64 IMTClient::ComplianceDateApproval() const  
---  
.NET (Gateway/Manager API)
long CIMTClient.ComplianceDateApproval()  
---  
Return Value
Client approval date in seconds since 01.01.1970.
IMTClient::ComplianceDateApproval
Set the client approval date.
C++
MTAPIRES IMTClient::ComplianceDateApproval( const INT64 date // Date of approval )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.ComplianceDateApproval( long date // Date of approval )  
---  
Parameters
time
[in] Client approval date in seconds since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.