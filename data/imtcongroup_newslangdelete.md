# NewsLangDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ NewsLangDelete | [](imtcongroup_newslangupdate.md "NewsLangUpdate") [](imtcongroup_newslangclear.md "NewsLangClear") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::NewsLangDelete
Deletes a news language by the index.
C++
MTAPIRES IMTConGroup::NewsLangDelete( const UINT pos // Position of the language )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.NewsLangDelete( uint pos // Position of the language )  
---  
Python (Manager API)
MTConGroup.NewsLangDelete( pos # Position of the language )  
---  
Parameters
pos
[in] Position of the language in the list, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.