# OwnerHost (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ OwnerHost | [](imtconcommon_ownerid.md "OwnerID") [](imtconcommon_owneremail.md "OwnerEmail") |
| --- | --- | --- |
| --- | --- |

IMTConCommon::OwnerHost
Get the host address of the platform owner.
C++
LPCWSTR IMTConCommon::OwnerHost() const  
---  
.NET (Gateway/Manager API)
string CIMTConCommon.OwnerHost()  
---  
Python (Manager API)
MTConCommon.OwnerHost  
---  
Return Value
If successful, it returns a pointer to a string with the host address of the owner of the platform. Otherwise, it returns NULL.
Note
The platform owner's host address is specified in the license.
A pointer to the resulting string is valid for the lifetime of the [IMTConCommon](imtconcommon.md "IMTConCommon") object.
To use the string after the object removal (call of the [IMTConCommon::Release](imtconcommon_release.md "Release") method of this object), a copy of it should be created.
The maximum length of the address is 128 characters (including the sign of the string end).