# MQL5Login (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPS ](imtconvps.md "IMTConVPS")/ MQL5Login | [](imtconvps_flags.md "Flags") [](imtconvps_mql5password.md "MessageTemplate") |
| --- | --- | --- |
| --- | --- |

IMTConVPS::MQL5Login
Get the MQL5 account login used for the Sponsored VPS.
C++
LPCWSTR IMTConVPS::MQL5Login() const  
---  
.NET (Gateway/Manager API)
string CIMTConVPS.MQL5Login()  
---  
Python
MTConVPS.MQL5Login  
---  
Return Value
If successful, the method returns a pointer to a string with the login. Otherwise, it returns NULL.
Note
The method is obsolete and is no longer used.
The pointer to the resulting string is valid for the lifetime of the [IMTConVPS](imtconvps.md "IMTConVPS") object.
To use the string after the object removal (call of the [IMTConVPS::Release](imtconvps_release.md "Release") method of this object), a copy of it should be created.
IMTConVPS::MQL5Login
Set the MQL5 account login used for the Sponsored VPS.
C++
MTAPIRES IMTConVPS::MQL5Login( LPCWSTR login // Login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPS.MQL5Login( srting login // Login )  
---  
Python
MTConVPS.MQL5Login  
---  
Parameters
login
[in] MQL5 account login.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method is obsolete and is no longer used.
The name length is limited to 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.