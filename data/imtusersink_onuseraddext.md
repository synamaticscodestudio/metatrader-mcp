# OnUserAddExt (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserSink ](imtusersink.md "IMTUserSink")/ OnUserAddExt | [](imtusersink_onuseradd.md "OnUserAdd") [](imtusersink_onuserupdate.md "OnUserUpdate") |
| --- | --- | --- |
| --- | --- |

IMTUserSink::OnUserAddExt
An extended handler of a new account addition event. It additionally passes the passwords of the created account.
virtual void IMTUserSink::OnUserAddExt( const IMTUser* user, // A pointer to the added record LPCWSTR master_password, // Main password LPCWSTR investor_password, // Investor password )  
---  
Parameters
user
[in] A pointer to the [IMTUser](imtuser.md "IMTUser") added user object.
master_password
[in] The main password of the created account.
investor_password
[in] The investor password of the created account.
Note
The method is only used in the MetaTrader 5 Server API.