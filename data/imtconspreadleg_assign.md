# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Spreads ](config_spread.md "Spreads") / [ IMTConSpreadLeg ](imtconspreadleg.md "IMTConSpreadLeg")/ Assign | [](imtconspreadleg_release.md "Release") [](imtconspreadleg_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConSpreadLeg::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConSpreadLeg::Assign( const IMTConSpreadLeg* leg // source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSpreadLeg.Assign( CIMTConSpreadLeg leg // source object )  
---  
Parameters
leg
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.