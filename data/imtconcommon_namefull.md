# NameFull (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ NameFull | [](imtconcommon_name.md "Name") [](imtconcommon_owner.md "Owner") |
| --- | --- | --- |
| --- | --- |

IMTConCommon::NameFull
Get the full name of the platform.
C++
LPCWSTR IMTConCommon::NameFull() const  
---  
.NET (Gateway/Manager API)
string CIMTConCommon.NameFull()  
---  
Python (Manager API)
MTConCommon.NameFull  
---  
Return Value
If successful, it returns a pointer to a string with the full name of the platform. Otherwise, it returns NULL.
Note
The full name of the platform is formed of [IMTConCommon::OwnerID](imtconcommon_ownerid.md "OwnerID") \- [IMTConCommon::Name](imtconcommon_name.md "Name").
A pointer to the resulting string is valid for the lifetime of the [IMTConCommon](imtconcommon.md "IMTConCommon") object.
To use the string after the object removal (call of the [IMTConCommon::Release](imtconcommon_release.md "Release") method of this object), a copy of it should be created.
The maximum name length is 64 characters (including the end-of-line character).