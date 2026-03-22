# NewsMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ NewsMode | [](imtcongroup_reportssmtppass.md "ReportsSMTPPass") [](imtcongroup_newscategory.md "NewsCategory") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::NewsMode
Get the mode of news sending to the clients from the group.
C++
UINT IMTConGroup::NewsMode() const  
---  
.NET (Gateway/Manager API)
EnNewsMode CIMTConGroup.NewsMode()  
---  
Python (Manager API)
MTConGroup.NewsMode  
---  
Return Value
A value from the [IMTConGroup::EnNewsMode](imtcongroup_enum.htm#ennewsmode) enumeration.
IMTConGroup::NewsMode
Set the mode of news sending to the clients from the group.
C++
MTAPIRES IMTConGroup::NewsMode( const UINT mode // Mode of news sending )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.NewsMode( EnNewsMode mode // Mode of news sending )  
---  
Python (Manager API)
MTConGroup.NewsMode  
---  
Parameters
mode
[in] The [IMTConGroup::EnNewsMode](imtcongroup_enum.htm#ennewsmode) enumeration is used for setting the news sending mode.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.