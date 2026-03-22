# UserCertCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Certificates ](serverapi_certificate.md "Certificates")/ UserCertCreate | [](serverapi_certificate.md "Certificates") [](imtserverapi_usercertupdate.md "UserCertUpdate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::UserCertCreate
Create an object of a certificate.
IMTCertificate* IMTServerAPI::UserCertCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTCertificate](imtcertificate.md "IMTCertificate") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTCertificate::Release](imtcertificate_release.md "Release") method of this object.