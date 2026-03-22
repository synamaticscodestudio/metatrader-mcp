# MarginFreeProfitMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ MarginFreeProfitMode | [](imtcongroup_marginstopout.md "MarginStopOut") [](imtcongroup_marginmode.md "MarginMode") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::MarginFreeProfitMode
Gets the mode of use of the profit/loss recorded during a trading day in free margin calculation.
C++
UINT IMTConGroup::MarginFreeProfitMode() const  
---  
.NET (Gateway/Manager API)
uint CIMTConGroup.MarginFreeProfitMode()  
---  
Python (Manager API)
MTConGroup.MarginFreeProfitMode  
---  
Return Value
A value from [IMTConGroup::EnFreeMarginProfitMode](imtcongroup_enum.htm#enmarginfreeprofitflags).
IMTConGroup::MarginFreeProfitMode
Sets the mode of use of the profit/loss recorded during a trading day in free margin calculation.
C++
MTAPIRES IMTConGroup::MarginFreeProfitMode( const UINT freemode // Use of profit/loss in margin calculation )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.MarginFreeProfitMode( uint freemode // Use of profit/loss in margin calculation )  
---  
Python (Manager API)
MTConGroup.MarginFreeProfitMode  
---  
Parameters
freemode
[in] The [IMTConGroup::EnFreeMarginProfitMode](imtcongroup_enum.htm#enmarginfreeprofitflags) enumeration is used to set the mode of including daily profit/loss into free margin calculation..
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.