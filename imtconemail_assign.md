# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Mail Servers ](config_email.md "Mail Servers") / [ IMTConEmail ](imtconemail.md "IMTConEmail")/ Assign | [](imtconemail_release.md "Release") [](imtconemail_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConEmail::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConEmail::Assign( const IMTConEmail* email // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConEmail.Assign( CIMTConEmail email // Source object )  
---  
Parameters
email
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.