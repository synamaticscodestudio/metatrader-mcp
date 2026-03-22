# TradingGroup (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ TradingGroup | [](imtclient_experiencestocks.md "ExperienceStocks") [](imtclient_clientorigin.md "ClientOrigin") |
| --- | --- | --- |
| --- | --- |

IMTClient::TradingGroup
Get the preferred trading group for the client.
C++
LPCWSTR IMTClient::AddressCity() const  
---  
.NET (Gateway/Manager API)
string CIMTClient.AddressCity()  
---  
Return Value
If successful, a pointer to a string with the group name is returned. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTClient](imtclient.md "IMTClient") object.
To be able to use the string after the object removal (call of the [IMTClient::Release](imtclient_release.md "Release") method of this object), a copy of it should be created.
IMTClient::AddressCity
Set the preferred trading group for the client.
C++
MTAPIRES IMTClient::AddressCity( LPCWSTR group // Group )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.AddressCity( string group  // Group )  
---  
Parameters
group
[in] The preferred trading group for the client.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The group name length is limited to 48 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.
The group name is equal to [IMTConGroup::Group](imtcongroup_group.md "Group").
The field is used to distribute client records between manager accounts. If this field is empty, the client record will be available to managers regardless of their account group permissions. If the field is filled, the client will only be available to the managers having the specified group permissions.