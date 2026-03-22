# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Time ](config_time.md "Time") / [ IMTConTime ](imtcontime.md "IMTConTime")/ Clear | [](imtcontime_assign.md "Assign") [](imtcontime_timezone.md "TimeZone") |
| --- | --- | --- |
| --- | --- |

IMTConTime::Clear
Clear an object.
C++
MTAPIRES IMTConTime::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConTime.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.