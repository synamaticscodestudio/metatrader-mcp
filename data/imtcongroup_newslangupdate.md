# NewsLangUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ NewsLangUpdate | [](imtcongroup_newslangadd.md "NewsLangAdd") [](imtcongroup_newslangdelete.md "NewsLangDelete") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::NewsLangUpdate
Change the language of news that the group will receive.
C++
MTAPIRES IMTConGroup::NewsLangUpdate( const UINT pos, // Position of the language const UINT language // News language )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.NewsLangUpdate( uint pos, // Position of the language uint language // News language )  
---  
Python (Manager API)
MTConGroup.NewsLangUpdate( pos, # Position of the language language # News language )  
---  
MTConGroup.NewsLangSet( lang_list # A list of languages )  
---  
Parameters
pos
[in] Position of the language in the list, starting with 0.
language
[in] News language in the LANGID format used in [MS Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318693) (value from Prim.lang.identifier).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.