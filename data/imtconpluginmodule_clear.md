# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Plugins ](config_plugins.md "Plugins") / [ IMTConPluginModule ](imtconpluginmodule.md "IMTConPluginModule")/ Clear | [](imtconpluginmodule_assign.md "Assign") [](imtconpluginmodule_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConPluginModule::Clear
Clear an object.
C++
MTAPIRES IMTConPluginModule::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConPluginModule.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.