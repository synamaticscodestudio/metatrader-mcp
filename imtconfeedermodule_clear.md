# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeederModule ](imtconfeedermodule.md "IMTConFeederModule")/ Clear | [](imtconfeedermodule_assign.md "Assign") [](imtconfeedermodule_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConFeederModule::Clear
Clear an object.
C++
MTAPIRES IMTConFeederModule::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeederModule.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.