# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Time ](config_time.md "Time") / [ IMTConTime ](imtcontime.md "IMTConTime")/ Assign | [](imtcontime_release.md "Release") [](imtcontime_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConTime::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConTime::Assign( const IMTConTime* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConTime.Assign( CIMTConTime param // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.