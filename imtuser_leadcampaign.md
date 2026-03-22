# LeadCampaign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ LeadCampaign | [](imtuser_leadsource.md "LeadSource") [](imtuser_interestrate.md "InterestRate") |
| --- | --- | --- |
| --- | --- |

IMTUser::LeadCampaign
Get a lead campaign — name of a marketing campaign a client was attracted by.
C++
LPCWSTR IMTUser::LeadCampaign() const  
---  
.NET (Gateway/Manager API)
string CIMTUser.LeadCampaign()  
---  
Return Value
If successful, it returns a pointer to a string with a comment to the client. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTUser](imtuser.md "IMTUser") object.
To use the string after the object removal (call of the [IMTUser::Release](imtuser_release.md "Release") method of this object), a copy of it should be created.
The IMTUser::LeadSource and IMTUser::LeadSource fields are used for marketing campaigns and allow you to track where a client came from. To receive the data, add the following labels to the client or mobile platform download link:
https://download.terminal.free/cdn/web/metaquotes.ltd/mt5/mt5setup.exe?utm_source=YourWebsite&utm_campaign=YourCampaign https://download.terminal.free/cdn/mobile/mt5/ios?server=ABC-Demo,ABC-Real&utm_source=YourWebsite&utm_campaign=YourCampaign https://download.terminal.free/cdn/mobile/mt5/android?server=ABC-Demo,ABC-Real&utm_source=YourWebsite&utm_campaign=YourCampaign  
---  
where YourCampaign is a campaign name, while YourWebsite is a website the link has been placed at. In the 'server' parameter of the mobile platform links, enter the list of your servers to be shown to traders when they open an account.
When opening a demo account and connecting to any trading account via the terminal downloaded using such a link, utm_source and utm_campaign values are set in a client record at the server side. If the fields are already filled, the label values are not overwritten when re-connecting to the account (even if the terminal used for connection was downloaded by a link containing other labels).
Lead Source and Lead Campaign data from terminal download links can be written to created accounts only if the broker has a [Finteza license](https://support.metaquotes.net/en/docs/mt5/platform/administration/integration/integration_finteza).
IMTUser::LeadCampaign
Sets a lead campaign — name of a marketing campaign a client was attracted by.
C++
MTAPIRES IMTUser::LeadCampaign( LPCWSTR lead_campaign // Lead campaign )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.LeadCampaign( string lead_campaign // Lead campaign )  
---  
Parameters
lead_campaign
[in] A lead campaign — name of a marketing campaign a client was attracted by.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The maximum comment length is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.
The IMTUser::LeadSource and IMTUser::LeadSource fields are used for marketing campaigns and allow you to track where a client came from. To receive the data, add the following labels to the client or mobile platform download link:
https://download.terminal.free/cdn/web/metaquotes.ltd/mt5/mt5setup.exe?utm_source=YourWebsite&utm_campaign=YourCampaign https://download.terminal.free/cdn/mobile/mt5/ios?server=ABC-Demo,ABC-Real&utm_source=YourWebsite&utm_campaign=YourCampaign https://download.terminal.free/cdn/mobile/mt5/android?server=ABC-Demo,ABC-Real&utm_source=YourWebsite&utm_campaign=YourCampaign  
---  
where YourCampaign is a campaign name, while YourWebsite is a website the link has been placed at. In the 'server' parameter of the mobile platform links, enter the list of your servers to be shown to traders when they open an account.
When opening a demo account and connecting to any trading account via the terminal downloaded using such a link, utm_source and utm_campaign values are set in a client record at the server side. If the fields are already filled, the label values are not overwritten when re-connecting to the account (even if the terminal used for connection was downloaded by a link containing other labels).
Lead Source and Lead Campaign data from terminal download links can be written to created accounts only if the broker has a [Finteza license](https://support.metaquotes.net/en/docs/mt5/platform/administration/integration/integration_finteza).