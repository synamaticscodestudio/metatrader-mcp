# MarginFreeMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ MarginFreeMode | [](imtcongroup_tradevirtualcredit.md "TradeVirtualCredit") [](imtcongroup_marginsomode.md "MarginSOMode") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::MarginFreeMode
Gets the mode of including floating profit/loss into free margin calculation.
C++
UINT IMTConGroup::MarginFreeMode() const  
---  
.NET (Gateway/Manager API)
EnFreeMarginMode CIMTConGroup.MarginFreeMode()  
---  
Python (Manager API)
MTConGroup.MarginFreeMode  
---  
Return Value
A value from [IMTConGroup::EnFreeMarginMode](imtcongroup_enum.htm#enfreemarginmode).
IMTConGroup::MarginFreeMode
Sets the mode of including floating profit/loss into free margin calculation.
C++
MTAPIRES IMTConGroup::MarginFreeMode( const UINT freemode // Mode of including floating profit/loss )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.MarginFreeMode( EnFreeMarginMode freemode // Mode of including floating profit/loss )  
---  
Python (Manager API)
MTConGroup.MarginFreeMode  
---  
Parameters
freemode
[in] The [IMTConGroup::EnFreeMarginMode](imtcongroup_enum.htm#enfreemarginmode) enumeration is used to set the mode of free margin use.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.