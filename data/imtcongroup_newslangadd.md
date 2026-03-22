# NewsLangAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ NewsLangAdd | [](imtcongroup_newscategory.md "NewsCategory") [](imtcongroup_newslangupdate.md "NewsLangUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::NewsLangAdd
Add a language of news that the group will receive.
C++
MTAPIRES IMTConGroup::NewsLangAdd( const UINT language // News language )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.NewsLangAdd( uint language // News language )  
---  
Python (Manager API)
MTConGroup.NewsLangAdd( language # News language )  
---  
Parameters
language
[in] News language in the LANGID format used in [MS Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318693) (value from Prim.lang.identifier).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.