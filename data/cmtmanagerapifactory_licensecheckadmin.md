# LicenseCheckAdmin (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ CMTManagerAPIFactory ](cmtmanagerapifactory.md "CMTManagerAPIFactory")/ LicenseCheckAdmin | [](cmtmanagerapifactory_version.md "Version") [](cmtmanagerapifactory_licensecheckmanager.md "LicenseCheckManager") |
| --- | --- | --- |
| --- | --- |

CMTManagerAPIFactory::LicenseCheckAdmin
Check whether the Manager API application use is authorized.
C++
static MTAPIRES CMTManagerAPIFactory::LicenseCheckAdmin( IMTAdminAPI* admin, // A pointer to the IMTAdminAPI interface LPCWSTR name // Module name )  
---  
.NET
static MTRetCode SMTManagerAPIFactory.LicenseCheckAdmin( CIMTAdmin admin, // The IMTAdminAPI object string name // Module name )  
---  
Program Parameters
admin
[in] A pointer to the [IMTAdminAPI](imtadminapi.md "Administrator Interface") interface, using which the authorization to use Manager API is checked in the license.
name
[in] The name of the Manager API application, for which the license is checked. A unique module name must be defined in advanced in the program code.
Return Value
An indication of a successful verification is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Further Note
This factory method is provided for an easier license verification. The full description of the verification algorithm is provided in the section related to the [IMTAdminAPI::LicenseCheck](imtadminapi_licensecheck.md "LicenseCheck") function.
License verification can only be performed after [connection to a server](imtadminapi_connect.md "Connect"), otherwise the method will return the [MT_RET_ERR_DATA](retcodes_common.md "Common errors") error.