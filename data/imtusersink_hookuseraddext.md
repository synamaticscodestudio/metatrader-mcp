# HookUserAddExt (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserSink ](imtusersink.md "IMTUserSink")/ HookUserAddExt | [](imtusersink_hookuseradd.md "HookUserAdd") [](imtusersink_hookuserupdate.md "HookUserUpdate") |
| --- | --- | --- |
| --- | --- |

IMTUserSink::HookUserAddExt
An extended hook for the new account addition event. It additionally passes the passwords of the created account.
virtual MTAPIRES IMTUserSink::HookUserAddExt( IMTUser* user // Account object LPCWSTR master_password, // Main password LPCWSTR investor_password, // Investor password )  
---  
Parameters
user
[in] A pointer to the [IMTUser](imtuser.md "IMTUser") added user object.
master_password
[in] The main password of the created account.
investor_password
[in] The investor password of the created account.
Return Value
In case there are no handlers if this event, [MT_RET_OK](retcodes_successful.md "Successful completion") is returned.
If the event handler returns a code other than [MT_RET_OK](retcodes_successful.md "Successful completion"), the account will not be added and the hook will not be passed to other handlers (including hooks in other plugins).
Note
The hook is called right before an account is added to the database. The main purpose of this hook is to modify an entry being added and, if necessary, to prevent the addition of unwanted records.
The method is only used in the MetaTrader 5 Server API.