# Countries (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConAccountAllocation ](imtconaccountallocation.md "IMTConAccountAllocation")/ Countries | [](imtconaccountallocation_leverages.md "Leverages") [](imtconaccountallocation_confirmationemail.md "ConfirmationEmail") |
| --- | --- | --- |
| --- | --- |

IMTConAccountAllocation::Countries
Get the list of countries in which it will be possible to open an account in this group.
C++
LPCWSTR IMTConAccountAllocation::Countries() const  
---  
.NET (Gateway/Manager API)
string CIMTConAccountAllocation.Countries()  
---  
Return Value
In case of success, the method returns a pointer to a string containing a comma-separated list of two-letter country codes. For example: US,CY,ES. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConAccountAllocation](imtconaccountallocation.md "IMTConAccountAllocation") object.
To use the string after the object removal (after the call of the [IMTConAccountAllocation::Release](imtconaccountallocation_release.md "Release") method of this object), you should create the string copy.
IMTConAccountAllocation::Countries
Set the list of countries in which it will be possible to open an account in this group.
C++
MTAPIRES IMTConAccountAllocation::Countries( LPCWSTR countries // List of countries )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAccountAllocation.Countries( string countries // List of countries )  
---  
Parameters
leverages
[in] A comma-separated list of two-letter country codes. For example: US,CY,ES. Specify 'All' to include all countries.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.
Note
The length of the list is limited to 64 characters (including the newline character). If a string of a greater length is assigned, it will be truncates to the required length.