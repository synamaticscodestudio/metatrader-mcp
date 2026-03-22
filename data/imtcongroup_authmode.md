# AuthMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ AuthMode | [](imtcongroup_permissionsflags.md "PermissionsFlags") [](imtcongroup_authotpmode.md "AuthOTPMode") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::AuthMode
Get the authorization mode for accounts in the group.
C++
UINT IMTConGroup::AuthMode() const  
---  
.NET (Gateway/Manager API)
EnAuthMode CIMTConGroup.AuthMode()  
---  
Python (Manager API)
MTConGroup.AuthMode  
---  
Return Value
A value from [IMTConGroup::EnAuthMode](imtcongroup_enum.htm#enauthmode).
IMTConGroup::AuthMode
Set the authorization mode for accounts in the group.
C++
MTAPIRES IMTConGroup::AuthMode( const UINT mode // Authorization mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.AuthMode( EnAuthMode  mode // Authorization mode )  
---  
Python (Manager API)
MTConGroup.AuthMode  
---  
Parameters
mode
[in] The [IMTConGroup::EnAuthMode](imtcongroup_enum.htm#enauthmode) enumeration is used to pass the authorization mode.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.