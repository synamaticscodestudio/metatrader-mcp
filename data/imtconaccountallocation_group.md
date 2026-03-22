# Group (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConAccountAllocation ](imtconaccountallocation.md "IMTConAccountAllocation")/ Group | [](imtconaccountallocation_clear.md "Clear") [](imtconaccountallocation_description.md "Description") |
| --- | --- | --- |
| --- | --- |

IMTConAccountAllocation::Group
Get the group in which the accounts requested through terminals will be opened.
C++
LPCWSTR IMTConAccountAllocation::Group() const  
---  
.NET (Gateway/Manager API)
string CIMTConAccountAllocation.Group()  
---  
Return Value
On success, the method returns a pointer to a string with the group name, including its path. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConAccountAllocation](imtconaccountallocation.md "IMTConAccountAllocation") object.
To use the string after the object removal (after the call of the [IMTConAccountAllocation::Release](imtconaccountallocation_release.md "Release") method of this object), you should create the string copy.
IMTConAccountAllocation::Group
Set the group in which the accounts requested through terminals will be opened.
C++
MTAPIRES IMTConAccountAllocation::Group( LPCWSTR name // Group name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAccountAllocation.Group( string name // Group name )  
---  
Parameters
name
[in] Group name including path.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.
Note
The group name length is limited to 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be truncates to the required length.