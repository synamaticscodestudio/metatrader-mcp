# MessageTemplate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPS ](imtconvps.md "IMTConVPS")/ MQL5Password | [](imtconvps_mql5login.md "MQL5Login") [](imtconvps_ruleadd.md "RuleAdd") |
| --- | --- | --- |
| --- | --- |

IMTConVPS::MQL5Password
Get the MQL5 account password used for the Sponsored VPS.
C++
LPCWSTR IMTConVPS::MQL5Password() const  
---  
.NET (Gateway/Manager API)
string CIMTConVPS.MQL5Password()  
---  
Python
MTConVPS.MQL5Password  
---  
Return Value
If successful, the method returns a pointer to a string with the password. Otherwise, it returns NULL.
Note
The method is obsolete and is no longer used.
The pointer to the resulting string is valid for the lifetime of the [IMTConVPS](imtconvps.md "IMTConVPS") object.
To use the string after the object removal (call of the [IMTConVPS::Release](imtconvps_release.md "Release") method of this object), a copy of it should be created.
IMTConVPS::MQL5Password
Set the MQL5 account password used for the Sponsored VPS.
C++
MTAPIRES IMTConVPS::MQL5Password( LPCWSTR password // Password )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPS.MQL5Password( srting password // Password )  
---  
Python
MTConVPS.MQL5Password  
---  
Parameters
password
[in] MQL5 account password.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method is obsolete and is no longer used.
The name length is limited to 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.