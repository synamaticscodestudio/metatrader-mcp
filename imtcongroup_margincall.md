# MarginCall (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ MarginCall | [](imtcongroup_marginsomode.md "MarginSOMode") [](imtcongroup_marginstopout.md "MarginStopOut") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::MarginCall
Get the Margin Call level.
C++
double IMTConGroup::MarginCall() const  
---  
.NET (Gateway/Manager API)
double CIMTConGroup.MarginCall()  
---  
Python (Manager API)
MTConGroup.MarginCall()  
---  
Return Value
The level of Margin Call.
Note
The units of the level are set using the [IMTConGroup::MarginSOMode](imtcongroup_marginsomode.md "MarginSOMode") method.
IMTConGroup::MarginCall
Set the Margin Call level.
C++
MTAPIRES IMTConGroup::MarginCall( const double level // The level of Margin Call )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.MarginCall( double level // The level of Margin Call )  
---  
Python (Manager API)
MTConGroup.MarginCall()  
---  
Parameters
level
[in] The level of Margin Call.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The units of the level are set using the [IMTConGroup::MarginSOMode](imtcongroup_marginsomode.md "MarginSOMode") method.