# UserCertCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserCertCreate | [](imtadminapi_userpasswordchange.md "UserPasswordChange") [](imtadminapi_usercertupdate.md "UserCertUpdate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserCertCreate
Create an object of a certificate.
C++
IMTCertificate* IMTAdminAPI::UserCertCreate()  
---  
.NET
CIMTCertificate CIMTAdminAPI.UserCertCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTCertificate](imtcertificate.md "IMTCertificate") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTCertificate::Release](imtcertificate_release.md "Release") method of this object.