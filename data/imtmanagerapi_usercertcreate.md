# UserCertCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserCertCreate | [](imtmanagerapi_userpasswordchange.md "UserPasswordChange") [](imtmanagerapi_usercertupdate.md "UserCertUpdate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserCertCreate
Create an object of a certificate.
C++
IMTCertificate* IMTManagerAPI::UserCertCreate()  
---  
.NET
CIMTCertificate CIMTManagerAPI.UserCertCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTCertificate](imtcertificate.md "IMTCertificate") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTCertificate::Release](imtcertificate_release.md "Release") method of this object.