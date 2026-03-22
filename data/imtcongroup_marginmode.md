# MarginMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ MarginMode | [](imtcongroup_marginfreeprofitmode.md "MarginFreeProfitMode") [](imtcongroup_marginflags.md "MarginFlags") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::MarginMode
Gets the risk management mode applied for the group.
C++
UINT IMTConGroup::MarginMode() const  
---  
.NET (Gateway/Manager API)
EnMarginMode CIMTConGroup.MarginMode()  
---  
Python (Manager API)
MTConGroup.MarginMode  
---  
Return Value
A value from [IMTConGroup::EnMarginMode](imtcongroup_enum.htm#enmarginmode).
IMTConGroup::MarginMode
Sets the risk management mode applied for the group.
C++
MTAPIRES IMTConGroup::MarginMode( const UINT mode // Risk management model )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.MarginMode( EnMarginMode mode // Risk management model )  
---  
Python (Manager API)
MTConGroup.MarginMode  
---  
Parameters
freemode
[in] The [IMTConGroup::EnMarginMode](imtcongroup_enum.htm#enmarginmode). enumeration is used to set the risk management model.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.