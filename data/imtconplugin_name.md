# Name (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Plugins ](config_plugins.md "Plugins") / [ IMTConPlugin ](imtconplugin.md "IMTConPlugin")/ Name | [](imtconplugin_clear.md "Clear") [](imtconplugin_server.md "Server") |
| --- | --- | --- |
| --- | --- |

IMTConPlugin::Name
Get the name of a plugin.
C++
LPCWSTR IMTConPlugin::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTConPlugin.Name()  
---  
Python (Manager API)
MTConPlugin.Name  
---  
Return Value
If successful, it returns a pointer to a string with the name of a plugin. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConPlugin](imtconplugin.md "IMTConPlugin") object.
To use the line after the object removal (call of the [IMTConPlugin::Release](imtconplugin_release.md "Release") method of this object), a copy of it should be created.
IMTConPlugin::Name
Set the name of a plugin.
C++
MTAPIRES IMTConPlugin::Name( LPCWSTR name // Plugin name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConPlugin.Name( string  name // Plugin name )  
---  
Python (Manager API)
MTConPlugin.Name  
---  
Parameters
name
[in] The name of a plugin.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum name length is 16 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.