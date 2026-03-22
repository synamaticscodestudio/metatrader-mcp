# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ Clear | [](imtconcommon_assign.md "Assign") [](imtconcommon_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConCommon::Clear
Clear an object.
C++
MTAPIRES IMTConCommon::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommon.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.