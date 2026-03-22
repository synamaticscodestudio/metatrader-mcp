# Name (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ Name | [](imtconcommon_clear.md "Clear") [](imtconcommon_namefull.md "NameFull") |
| --- | --- | --- |
| --- | --- |

IMTConCommon::Name
Get the name of the platform.
C++
LPCWSTR IMTConCommon::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTConCommon.Name()  
---  
Python (Manager API)
MTConCommon.Name  
---  
Return Value
If successful, it returns a pointer to a string with the name of the platform. Otherwise, it returns NULL.
Note
A pointer to the resulting string is valid for the lifetime of the [IMTConCommon](imtconcommon.md "IMTConCommon") object.
To use the string after the object removal (call of the [IMTConCommon::Release](imtconcommon_release.md "Release") method of this object), a copy of it should be created.
IMTConCommon::Name
Set the platform name.
C++
MTAPIRES IMTConCommon::Name( LPCWSTR name // Platform name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommon.Name( string  name // Platform name )  
---  
Python (Manager API)
MTConCommon.Name  
---  
Parameters
name
[in] The name of the platform.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum name length is 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.