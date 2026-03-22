# NewsLangClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ NewsLangClear | [](imtcongroup_newslangdelete.md "NewsLangDelete") [](imtcongroup_newslangtotal.md "NewsLangTotal") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::NewsLangClear
Clear the list of news languages.
C++
MTAPIRES IMTConGroup::NewsLangClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.NewsLangClear()  
---  
Python (Manager API)
MTConGroup.NewsLangClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears the entire list of news languages specified for the group. An empty list means that the group will receive news in all languages.