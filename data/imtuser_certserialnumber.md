# CertSerialNumber (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ CertSerialNumber | [](imtuser_group.md "Group") [](imtuser_rights.md "Rights") |
| --- | --- | --- |
| --- | --- |

IMTUser::CertSerialNumber
Get the number of the last certificate that was used by the client for authorization.
C++
UINT64 IMTUser::CertSerialNumber() const  
---  
.NET (Gateway/Manager API)s
ulong CIMTUser.CertSerialNumber()  
---  
Return Value
The number of the last certificate that was used by the client for authorization.
Note
Certificates are used in the [extended authorization](imtcongroup_authmode.md "AuthMode") mode.