# AuthOTPMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ AuthOTPMode | [](imtcongroup_authmode.md "AuthMode") [](imtcongroup_authpasswordmin.md "AuthPasswordMin") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::AuthOTPMode
Gets authentication mode using one-time passwords.
C++
UINT IMTConGroup::AuthOTPMode() const  
---  
.NET (Gateway/Manager API)
EnAuthOTPMode CIMTConGroup.AuthOTPMode()  
---  
Python (Manager API)
MTConGroup.AuthOTPMode  
---  
Return Value
A value from [IMTConGroup::EnAuthOTPMode](imtcongroup_enum.htm#enauthotpmode).
IMTConGroup::AuthOTPMode
Sets authentication mode using one-time passwords.
C++
MTAPIRES IMTConGroup::AuthOTPMode( const UINT mode // OTP authentication mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.AuthOTPMode( EnAuthOTPMode mode // OTP authentication mode )  
---  
Python (Manager API)
MTConGroup.AuthOTPMode  
---  
Parameters
mode
[in] The [IMTConGroup::EnAuthOTPMode](imtcongroup_enum.htm#enauthotpmode) enumeration is used for setting the OTP authentication mode..
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.