# OnUserChangePassword (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserSink ](imtusersink.md "IMTUserSink")/ OnUserChangePassword | [](imtusersink_onuserlogoutext.md "OnUserLogoutExt") [](imtusersink_onusersync.md "OnUserSync") |
| --- | --- | --- |
| --- | --- |

IMTUserSink::OnUserChangePassword
Account password change event handler.
virtual void IMTUserSink::OnUserChangePassword( const IMTUser* user, // A pointer to the account object const UINT type, // Password type LPCWSTR password // Password )  
---  
Parameters
user
[in] A pointer to the [IMTUser](imtuser.md "IMTUser") account object.
type
[in] The type of the password being changed. The type is passed using the [IMTUser::EnUsersPasswords](imtuser_enum.htm#enuserspasswords) enumeration.
password
[in] New account password.
Note
This method is called by the API to notify that the account password has changed. The handler is called before the record is updated.
The method is only used in the MetaTrader 5 Server API.
When a password change is initiated from any terminals (desktop, mobile, manager) or from the API applications of version 2560 or older, a null pointer will be passed in the handler instead of the password. For the plugin on the server to receive passwords, the corresponding clients and applications must be updated to the latest version. Older versions do not support this functionality.