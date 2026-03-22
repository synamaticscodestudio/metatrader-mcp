# DateModified (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ DateModified | [](imtclient_datecreated.md "DateCreated") [](imtclient_complianceapprovedby.md "ComplianceApprovedBy") |
| --- | --- | --- |
| --- | --- |

IMTClient::DateModified
Get the client's last modification date.
C++
INT64 IMTClient::DateModified() const  
---  
.NET (Gateway/Manager API)
long CIMTClient.DateModified()  
---  
Return Value
The date the client was last modified in seconds since 01.01.1970.
IMTClient::DateModified
Set the client approval date.
C++
MTAPIRES IMTClient::DateModified( const INT64 date // last modification date )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.DateModified( long date // last modification date )  
---  
Parameters
time
[in] The date the client was last modified in seconds since 01.01.1970.
Return Value
An indication of a successful performance is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error occurred corresponding to the response code.