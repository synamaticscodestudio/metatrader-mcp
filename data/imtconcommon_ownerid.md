# OwnerID (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ OwnerID | [](imtconcommon_owner.md "Owner") [](imtconcommon_ownerhost.md "OwnerHost") |
| --- | --- | --- |
| --- | --- |

IMTConCommon::OwnerID
Get a short name of the owner of the platform.
C++
LPCWSTR IMTConCommon::OwnerID() const  
---  
.NET (Gateway/Manager API)
string CIMTConCommon.OwnerID()  
---  
Python (Manager API)
MTConCommon.OwnerID  
---  
Return Value
If successful, it returns a pointer to a string with the short name of the owner of the platform. Otherwise, it returns NULL.
Note
Owner's short name is specified in the platform license.
A pointer to the resulting string is valid for the lifetime of the [IMTConCommon](imtconcommon.md "IMTConCommon") object.
To use the string after the object removal (call of the [IMTConCommon::Release](imtconcommon_release.md "Release") method of this object), a copy of it should be created.
The maximum name length is 32 characters (including the end-of-line character).