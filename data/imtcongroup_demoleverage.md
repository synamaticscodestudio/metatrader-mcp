# DemoLeverage (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ DemoLeverage | [](imtcongroup_marginfloatingleverage.md "MarginFloatingLeverage") [](imtcongroup_demodeposit.md "DemoDeposit") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::DemoLeverage
Get the default credit leverage set for demo accounts opened in the group.
C++
UINT IMTConGroup::DemoLeverage() const  
---  
.NET (Gateway/Manager API)
uint CIMTConGroup.DemoLeverage()  
---  
Python (Manager API)
MTConGroup.DemoLeverage  
---  
Return Value
The default credit leverage for demo accounts opened in the group.
IMTConGroup::DemoLeverage
Set the default credit leverage for demo accounts opened in the group.
C++
MTAPIRES IMTConGroup::DemoLeverage( const UINT leverage // Default leverage )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.DemoLeverage( uint leverage // Default leverage )  
---  
Python (Manager API)
MTConGroup.DemoLeverage  
---  
Parameters
leverage
[in] Leverage in the range 1 to 500.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.