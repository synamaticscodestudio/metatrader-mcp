# TimeServer (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Time ](config_time.md "Time") / [ IMTConTime ](imtcontime.md "IMTConTime")/ TimeServer | [](imtcontime_timezone.md "TimeZone") [](imtcontime_timetableget.md "TimeTableGet") |
| --- | --- | --- |
| --- | --- |

IMTConTime::TimeServer
Get the address of the current time synchronization server.
C++
LPCWSTR IMTConTime::TimeServer() const  
---  
.NET (Gateway/Manager API)
string CIMTConTime.TimeServer()  
---  
Python (Manager API)
MTConTime.TimeServer  
---  
Return Value
If successful, it returns a pointer to a string with the address of the synchronization server. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConTime](imtcontime.md "IMTConTime") object.
To use the string after the object removal (call of the [IMTConTime::Release](imtcontime_release.md "Release") method of this object), a copy of it should be created.
IMTConTime::TimeServer
Set the address of the current time synchronization server.
C++
MTAPIRES IMTConTime::TimeServer( LPCWSTR server // Server address )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConTime.TimeServer( string server // Server address )  
---  
Python (Manager API)
MTConTime.TimeServer  
---  
Parameters
server
[in] The address of the time synchronization server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Supports time synchronization through the TIME and NTP protocols.
The maximum length of the address is 128 characters (including the sign of the string end). If a string of a greater length is assigned, it will be cut to this length.