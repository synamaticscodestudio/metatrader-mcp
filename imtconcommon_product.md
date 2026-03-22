# Product (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ Product | [](imtconcommon_owneremail.md "OwnerEmail") [](imtconcommon_expirationlicense.md "ExpirationLicense") |
| --- | --- | --- |
| --- | --- |

IMTConCommon::Product
Get the full name of the product.
C++
LPCWSTR IMTConCommon::Product() const  
---  
.NET (Gateway/Manager API)
string CIMTConCommon.Product()  
---  
Python (Manager API)
MTConCommon.Product  
---  
Return Value
If successful, it returns a pointer to a string with the full name of the product. Otherwise, it returns NULL.
Note
The full product name is specified in the license.
A pointer to the resulting string is valid for the lifetime of the [IMTConCommon](imtconcommon.md "IMTConCommon") object.
To use the string after the object removal (call of the [IMTConCommon::Release](imtconcommon_release.md "Release") method of this object), a copy of it should be created.
The product name length is limited to 64 characters (including the end-of-line character).