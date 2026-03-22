# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Plugins ](config_plugins.md "Plugins") / [ IMTConPlugin ](imtconplugin.md "IMTConPlugin")/ Clear | [](imtconplugin_assign.md "Assign") [](imtconplugin_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConPlugin::Clear
Clear an object.
C++
MTAPIRES IMTConPlugin::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConPlugin.Clear()  
---  
Python (Manager API)
MTConPlugin.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.