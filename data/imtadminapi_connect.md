# Connect (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Connection to the Server ](imtadminapi_connection.md "Connecting to the Server")/ Connect | [](imtadminapi_enpumpmodes.md "Pumping Mode") [](imtadminapi_disconnect.md "Disconnect") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::Connect
Connect to the trading platform.
C++
virtual MTAPIRES IMTAdminAPI::Connect( LPCWSTR server, // Server address UINT64 login, // Login LPCWSTR password, // Password LPCWSTR password_cert, // Certificate password UINT64 pump_mode, // Pumping mode UINT timeout=INFINITE // Timeout )  
---  
.NET
MTRetCode CIMTAdminAPI.Connect( sring server, // Server address ulong login, // Login string password, // Password string password_cert, // Certificate password CIMTAdminAPI.EnPumpModes pump_mode, // Pumping mode uint timeout // Timeout )  
---  
Python
AdminAPI.Connect( str server, # Server address int login, # Login str password, # Password AdminAPI.EnPumpModes pump_mode, # Pumping mode int timeout # Timeout )  
---  
Parameters
server
[in] Address and port of the Access server of the platform to which you are connecting. The values should be separated by a colon, for example: 192.168.0.1:443.
login
[in] The login of the manager for connection.
password
[in] The password of the manager for connection.
password_cert
[in] Certificate password. It is only used in the advanced server authentication mode. In this case, the certificate for the administrator account should be copied to [Manager API data directory]\bases\\[server name]\certificates\\.
pump_mode
[in] The pumping mode, in which connection will be established. To pass the pumping mode, the [IMTAdminAPI::EnPumpModes](imtadminapi_enpumpmodes.md "Pumping Mode") enumeration is used.
timeout=INFINITE
[in] Server connection timeout in milliseconds. If the application fails to connect to a server within this time, attempts will be terminated. By default there is no time limit.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
The IMTAdminAPI::Connect methods is synchronous; when connecting to the server local data bases (use of which depends on the enabled [modes of pumping](imtadminapi_enpumpmodes.md "Pumping Mode")) are synchronized with data bases of the server. After a successful connection, local data base will contain actual information.
The [MT_RET_AUTH_RESET_PASSWORD](retcodes_authentication.md "Authentication") response code means that the master password ([IMTUser::USER_PASS_MAIN](imtuser_enum.htm#enuserspasswords)) of the account that is used to connect to the server must be changed. In this case, change the password using the [IMTAdminAPI::PasswordChange](imtadminapi_passwordchange.md "PasswordChange") method and connect again with the new password.
To be able to use the [IMTAdminAPI](imtadminapi.md "Administrator Interface") interface, a manager account that is used for connecting to the server must have the "Connect using MetaTrader 5 Administrator" permission ([IMTConManager::RIGHT_ADMIN](imtconmanager_enum.htm#enmanagerrights)).
Note
After establishing a connection to the server, Manager API will automatically keep it up. No additional actions are required to keep the connection up.
After a successful connection using the address specified in the 'server' parameter, the application can switch to a more suitable access point (if such points are configured for the platform). The best access point is selected automatically based on [server priority](https://support.metaquotes.net/en/docs/mt5/platform/components/access_server/access_server_priority) settings. An application can only reconnect to [public](imtconserveraccess_enum.htm#enaccessflags) access points. If you manually connect to a hidden point (for example, for testing), and the application loses connection, it will not be able to reconnect to that point but will try to connect to public access servers.
To obtain the events of databases synchronization with the On*Sync trade server (for example, [IMTConGroupSink::OnGroupSync](imtcongroupsink_ongroupsync.md "OnGroupSync")), subscribe to these events before calling the IMTAdminAPI::Connect method.