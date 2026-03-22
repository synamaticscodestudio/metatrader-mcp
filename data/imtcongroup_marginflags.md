# MarginFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ MarginFlags | [](imtcongroup_marginmode.md "MarginMode") [](imtcongroup_marginfloatingleverage.md "MarginFloatingLeverage") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::MarginFlags
Gets margin calculation flags.
C++
UINT64 IMTConGroup::MarginFlags() const  
---  
.NET (Gateway/Manager API)
MarginFlags CIMTConGroup.MarginFlags()  
---  
Python (Manager API)
MTConGroup.MarginFlags  
---  
Return Value
A value from [IMTConGroup::MarginFlags](imtcongroup_enum.htm#enmarginflags).
IMTConGroup::MarginFlags
Sets margin calculation flags.
C++
MTAPIRES IMTConGroup::MarginFlags( const UINT64 flags // Margin calculation flags )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.MarginFlags( MarginFlags flags // Margin calculation flags )  
---  
Python (Manager API)
MTConGroup.MarginFlags  
---  
Parameters
flags
[in] The [IMTConGroup::MarginFlags](imtcongroup_enum.htm#enmarginflags) enumeration is used to pass margin calculation flags.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.