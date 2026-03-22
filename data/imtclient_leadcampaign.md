# LeadCampaign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ LeadCampaign | [](imtclient_compliancedatetermination.md "ComplianceDateTermination") [](imtclient_leadsource.md "LeadSource") |
| --- | --- | --- |
| --- | --- |

IMTClient::LeadCampaign
Get a lead campaign — the name of a marketing campaign a client was attracted by.
C++
LPCWSTR IMTClient::LeadCampaign() const  
---  
.NET (Gateway/Manager API)
string CIMTClient.LeadCampaign()  
---  
Return Value
If successful, the method returns a pointer to a string with the campaign. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTClient](imtclient.md "IMTClient") object.
To be able to use the string after the object removal (call of the [IMTClient::Release](imtclient_release.md "Release") method of this object), a copy of it should be created.
IMTClient::LeadCampaign
Set a lead campaign — the name of a marketing campaign a client was attracted by.
C++
MTAPIRES IMTClient::LeadCampaign( LPCWSTR campaign // Campaign )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.LeadCampaign( string campaign // Campaign )  
---  
Parameters
campaign
[in] Campaign name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The campaign name length is limited to 64 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.