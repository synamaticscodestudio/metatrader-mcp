# Password (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ History Synchronization ](config_historysync.md "History Synchronization") / [ IMTConHistorySync ](imtconhistorysync.md "IMTConHistorySync")/ Password | [](imtconhistorysync_login.md "Login") [](imtconhistorysync_mode.md "Mode") |
| --- | --- | --- |
| --- | --- |

IMTConHistorySync::Password
Get the trading account password used to connect to the server the data is synchronized with.
C++
LPCWSTR IMTConHistorySync::Password() const  
---  
.NET (Gateway/Manager API)
string CIMTConHistorySync.Password()  
---  
Python (Manager API)
MTConHistorySync.Password  
---  
Return Value
If successful, the method returns a pointer to a string with the password. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConHistorySync](imtconhistorysync.md "IMTConHistorySync") object.
To use the string after the object removal (call of the [IMTConHistorySync::Release](imtconhistorysync_release.md "Release") method of this object), a copy of it should be created.
IMTConHistorySync::Password
Set the trading account password used to connect to the server the data is synchronized with.
C++
MTAPIRES IMTConHistorySync::Password( LPCWSTR password // password )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConHistorySync.Password( string password // password )  
---  
Python (Manager API)
MTConHistorySync.Password  
---  
Parameters
password
[in] Trading account password.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum password length is 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.