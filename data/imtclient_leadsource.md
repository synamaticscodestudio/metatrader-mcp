# LeadSource (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ LeadSource | [](imtclient_leadcampaign.md "LeadCampaign") [](imtclient_introducer.md "Introducer") |
| --- | --- | --- |
| --- | --- |

IMTClient::LeadSource
Get a lead source — a website the client has come from.
C++
LPCWSTR IMTClient::LeadSource() const  
---  
.NET (Gateway/Manager API)
string CIMTClient.LeadSource()  
---  
Return Value
If successful, the method returns a pointer to a string with the source. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTClient](imtclient.md "IMTClient") object.
To be able to use the string after the object removal (call of the [IMTClient::Release](imtclient_release.md "Release") method of this object), a copy of it should be created.
IMTClient::LeadSource
Set a lead source — a website the client has come from.
C++
MTAPIRES IMTClient::LeadSource( LPCWSTR source // Source )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.LeadSource( string source  // Source )  
---  
Parameters
source
[in] Lead source.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The source name length is limited to 64 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.