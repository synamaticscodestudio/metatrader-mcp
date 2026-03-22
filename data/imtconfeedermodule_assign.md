# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeederModule ](imtconfeedermodule.md "IMTConFeederModule")/ Assign | [](imtconfeedermodule_release.md "Release") [](imtconfeedermodule_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConFeederModule::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConFeederModule::Assign( const IMTConFeederModule* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeederModule.Assign( CIMTConFeederModule param // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.