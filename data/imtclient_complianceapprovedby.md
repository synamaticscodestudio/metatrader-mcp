# ComplianceApprovedBy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ ComplianceApprovedBy | [](imtclient_datemodified.md "DateModified") [](imtclient_complianceclientcategory.md "ComplianceClientCategory") |
| --- | --- | --- |
| --- | --- |

IMTClient::ComplianceApprovedBy
Get the manager who checked the client data and approved registration.
C++
UINT64 IMTClient::ComplianceApprovedBy() const  
---  
.NET (Gateway/Manager API)
ulong CIMTClient.ComplianceApprovedBy()  
---  
Return Value
The login of the manager who approved the client.
IMTClient::ComplianceApprovedBy
Set the manager who checked the client data and approved registration.
C++
MTAPIRES IMTClient::ComplianceApprovedBy( const UINT64 manager // Manager )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.ComplianceApprovedBy( ulong manager // Manager )  
---  
Parameters
manager
[in] The login of the manager who approved the client.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
[IMTConManager::Login](imtconmanager_login.md "Login") is used for the login.