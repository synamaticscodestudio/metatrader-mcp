# Owner (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ Owner | [](imtconcommon_namefull.md "NameFull") [](imtconcommon_ownerid.md "OwnerID") |
| --- | --- | --- |
| --- | --- |

IMTConCommon::Owner
Get the full name of the owner of the platform.
C++
LPCWSTR IMTConCommon::Owner() const  
---  
.NET (Gateway/Manager API)
string CIMTConCommon.Owner()  
---  
Python (Manager API)
MTConCommon.Owner  
---  
Return Value
If successful, it returns a pointer to a string with the full name of the owner of the platform. Otherwise, it returns NULL.
Note
Owner's full name is specified in the platform license.
A pointer to the resulting string is valid for the lifetime of the [IMTConCommon](imtconcommon.md "IMTConCommon") object.
To use the string after the object removal (call of the [IMTConCommon::Release](imtconcommon_release.md "Release") method of this object), a copy of it should be created.
The name length is limited to 128 characters (including the end-of-line character).