# OwnerEmail (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ OwnerEmail | [](imtconcommon_ownerhost.md "OwnerHost") [](imtconcommon_product.md "Product") |
| --- | --- | --- |
| --- | --- |

IMTConCommon::OwnerEmail
Get email address of the owner of the platform.
C++
LPCWSTR IMTConCommon::OwnerEmail() const  
---  
.NET (Gateway/Manager API)
string CIMTConCommon.OwnerEmail()  
---  
Python (Manager API)
MTConCommon.OwnerEmail  
---  
Return Value
If successful, it returns a pointer to a string with the email address of the platform owner. Otherwise, it returns NULL.
Note
The platform owner's email is specified in the license.
A pointer to the resulting string is valid for the lifetime of the [IMTConCommon](imtconcommon.md "IMTConCommon") object.
To use the string after the object removal (call of the [IMTConCommon::Release](imtconcommon_release.md "Release") method of this object), a copy of it should be created.
The length of the address is limited to 64 characters (including the end-of-line character).