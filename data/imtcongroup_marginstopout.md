# MarginStopOut (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ MarginStopOut | [](imtcongroup_margincall.md "MarginCall") [](imtcongroup_marginfreeprofitmode.md "MarginFreeProfitMode") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::MarginStopOut
Get the Stop Out level.
C++
double IMTConGroup::MarginStopOut() const  
---  
.NET (Gateway/Manager API)
double CIMTConGroup.MarginStopOut()  
---  
Python (Manager API)
MTConGroup.MarginStopOut  
---  
Return Value
The level of Stop Out.
Note
The units of the level are set using the [IMTConGroup::MarginSOMode](imtcongroup_marginsomode.md "MarginSOMode") method.
IMTConGroup::MarginStopOut
Set the Stop Out level.
C++
MTAPIRES IMTConGroup::MarginStopOut( const double level // The level of Stop Out )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.MarginStopOut( double level // The level of Stop Out )  
---  
Python (Manager API)
MTConGroup.MarginStopOut  
---  
Parameters
level
[in] The level of Stop Out.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The units of the level are set using the [IMTConGroup::MarginSOMode](imtcongroup_marginsomode.md "MarginSOMode") method.