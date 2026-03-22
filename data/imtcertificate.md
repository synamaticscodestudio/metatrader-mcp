# IMTCertificate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Certificates ](reference_certificate.md "Certificates")/ IMTCertificate | [](reference_certificate.md "Certificates") [](imtcertificate_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTCertificate
The IMTCertificate class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtcertificate_release.md "Release") | Delete the current object. |
| [Assign](imtcertificate_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtcertificate_clear.md "Clear") | Clear an object. |
| [Open](imtcertificate_open.md "Open") | Loads certificate description from a specified file. |
| [OpenMemory](imtcertificate_openmemory.md "OpenMemory") | Loads certificate description from the memory. |
| [Save](imtcertificate_save.md "Save") | Saves the certificate to a file. |
| [Close](imtcertificate_close.md "Close") | Closes (unloads) a certificate that was earlier opened by IMTCertificate::Open or IMTCertificate::OpenMemory. |
| [Raw](imtcertificate_raw.md "Raw") | Gets a pointer to the memory to which the certificate is loaded. |
| [RawSize](imtcertificate_rawsize.md "RawSize") | Gets the amount of the memory occupied by the certificate. |
| [IsOpened](imtcertificate_isopened.md "IsOpened") | Checks whether an object interface has an open certificate. |
| [IsRoot](imtcertificate_isroot.md "IsRoot") | Checks if the loaded certificate is the root one. |
| [IsCA](imtcertificate_isca.md "IsCA") | Checks the loaded certificate - if it is possible to generate other certificates on its basis. |
| [IsEqual](imtcertificate_isequal.md "IsEqual") | Checks if the passed certificate is identical to the loaded one. |
| [SerialNumber](imtcertificate_serialnumber.md "SerialNumber") | Gets the serial number of the loaded certificate. |
| [ValidFrom](imtcertificate_validfrom.md "ValidFrom") | Gets date since which the loaded certificate is valid. |
| [ValidTo](imtcertificate_validto.md "ValidTo") | Gets date until which the loaded certificate is valid. |
| [NameCommon](imtcertificate_namecommon.md "NameCommon") | Gets the common name of the loaded certificate. |
| [NameIssuer](imtcertificate_nameissuer.md "NameIssuer") | Get the name of the issuer (vendor) of the loaded certificate. |
| [NameOrganization](imtcertificate_nameorganization.md "NameOrganization") | Gets the name of the organization (O), to which the loaded certificate has been issued. |
| [NameOrganizationUnit](imtcertificate_nameorganizationunit.md "NameOrganizationUnit") | Gets the name of the organization unit (OU), to which the loaded certificate has been issued. |
| [NameGiven](imtcertificate_namegiven.md "NameGiven") | Gets the name of the person (G), to whom the loaded certificate has been issued. |