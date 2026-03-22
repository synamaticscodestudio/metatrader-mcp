# Group (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYCGroup ](imtconkycgroup.md "IMTConKYCGroup")/ Group | [](imtconkycgroup_clear.md "Clear") [](imtconkycsink.md "IMTConKYCSink") |
| --- | --- | --- |
| --- | --- |

IMTConKYCGroup::Group
Get the group of accounts for which the KYC provider is used.
C++
LPCWSTR IMTConKYCGroup::Group() const  
---  
.NET (Gateway/Manager API)
string CIMTConKYCGroup.Group()  
---  
Return Value
If successful, the method returns a pointer to a string with the group name, including its path. Otherwise, NULL is returned.
Note
A pointer to the resulting string is valid for the lifetime of the [IMTConKYCGroup](imtconkycgroup.md "IMTConKYCGroup") object.
You should create a copy of the string if you want to use it after deleting the object (calling the [IMTConKYCGroup::Release](imtconkycgroup_release.md "Release") method of this object).
IMTConKYCGroup::Group
Set the group of accounts for which the KYC provider is used.
C++
MTAPIRES IMTConKYCGroup::Group( LPCWSTR group // Group )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYCGroup.Group( srting group // Group )  
---  
Parameters
group
[in] Full path to the group or group mask. The mask is specified using characters "*" (any value) and "!" (exception). For example: "demo*,!demoforex" means all groups with the names beginning with 'demo', except for the group demoforex.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.