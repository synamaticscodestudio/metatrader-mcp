# HookUserUpdate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserSink ](imtusersink.md "IMTUserSink")/ HookUserUpdate | [](imtusersink_hookuseraddext.md "HookUserAddExt") [](imtusersink_hookuserdelete.md "HookUserDelete") |
| --- | --- | --- |
| --- | --- |

IMTUserSink::HookUserUpdate
A hook of an event of account record update.
virtual MTAPIRES IMTUserSink::HookUserUpdate( const IMTUser* prev, // An object of the current account record IMTUser* user // An object of the account record after the update )  
---  
.NET (Gateway/Manager API)
virtual MTRetCode CIMTUserSink.HookUserUpdate( CIMTUser  prev, // Current account record CIMTUser user // Account record after the update )  
---  
Parameters
prev
[in] A pointer to the object of the current [IMTUser](imtuser.md "IMTUser") account record.
user
[in/out] A pointer to the object of an account record after modification.
Return Value
In case there are no handlers if this event, [MT_RET_OK](retcodes_successful.md "Successful completion") is returned.
If the event handler returns a code different from [MT_RET_OK](retcodes_successful.md "Successful completion"), then the account record will not be updated and the hook will not be passed to other handlers (including other plugins).
Note
The hook is called right before updating an account record in the client base. The main purpose of this hook is to modify an entry that is updated, and, if necessary, to prevent the unwanted change of records.
This method is used only in the MetaTrader 5 Server API.