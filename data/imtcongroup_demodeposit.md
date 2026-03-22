# DemoDeposit (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ DemoDeposit | [](imtcongroup_demoleverage.md "DemoLeverage") [](imtcongroup_demoinactivityperiod.md "DemoInactivityPeriod") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::DemoDeposit
Gets the default amount of deposit set for demo accounts opened in the group.
C++
double IMTConGroup::DemoDeposit() const  
---  
.NET (Gateway/Manager API)
double CIMTConGroup.DemoDeposit()  
---  
Python (Manager API)
MTConGroup.DemoDeposit  
---  
Return Value
The default amount of deposit for demo accounts opened in the group.
IMTConGroup::DemoDeposit
Set the default amount of deposit for demo accounts opened in the group.
C++
MTAPIRES IMTConGroup::DemoDeposit( const double deposit // Default deposit )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.DemoDeposit( double deposit // Default deposit )  
---  
Python (Manager API)
MTConGroup.DemoDeposit  
---  
Parameters
deposit
[in] The default amount of deposit for demo accounts opened in the group.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.