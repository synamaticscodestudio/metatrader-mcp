# ComplianceDateTermination (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ ComplianceDateTermination | [](imtclient_compliancedateapproval.md "ComplianceDateApproval") [](imtclient_leadcampaign.md "LeadCampaign") |
| --- | --- | --- |
| --- | --- |

IMTClient::ComplianceDateTermination
Get the date of service termination for the client.
C++
INT64 IMTClient::ComplianceDateTermination() const  
---  
.NET (Gateway/Manager API)
long CIMTClient.ComplianceDateTermination()  
---  
Return Value
Date on which provision of services to the client was terminated, in seconds since 01.01.1970.
IMTClient::ComplianceDateTermination
Set the date of service termination for the client.
C++
MTAPIRES IMTClient::ComplianceDateTermination( const INT64 date // Date of termination )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.ComplianceDateTermination( long date // Date of termination )  
---  
Parameters
time
[in] Date on which provision of services to the client was terminated, in seconds since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.