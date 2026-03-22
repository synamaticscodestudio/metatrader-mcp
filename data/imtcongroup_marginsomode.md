# MarginSOMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ MarginSOMode | [](imtcongroup_marginfreemode.md "MarginFreeMode") [](imtcongroup_margincall.md "MarginCall") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::MarginSOMode
Get the mode of checking the levels of Stop Out and Margin Call.
C++
UINT IMTConGroup::MarginSOMode() const  
---  
.NET (Gateway/Manager API)
EnStopOutMode CIMTConGroup.MarginSOMode()  
---  
Python (Manager API)
MTConGroup.MarginSOMode  
---  
Return Value
A value of [IMTConGroup::EnStopOutMode](imtcongroup_enum.htm#enstopoutmode).
IMTConGroup::MarginSOMode
Setting the mode of checking the levels of Stop Out and Margin Call.
C++
MTAPIRES IMTConGroup::MarginSOMode( const UINT level // SO and MC checking mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.MarginSOMode( EnStopOutMode level // SO and MC checking mode )  
---  
Python (Manager API)
MTConGroup.MarginSOMode  
---  
Parameters
level
[in] The [IMTConGroup::EnStopOutMode](imtcongroup_enum.htm#enstopoutmode) enumeration is used to pass the Stop Out and Margin call checking modes.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.