# HookUserAdd (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserSink ](imtusersink.md "IMTUserSink")/ HookUserAdd | [](imtusersink_onuserrestore.md "OnUserRestore") [](imtusersink_hookuseraddext.md "HookUserAddExt") |
| --- | --- | --- |
| --- | --- |

IMTUserSink::HookUserAdd
A hook of an event of adding a new account.
virtual MTAPIRES IMTUserSink::HookUserAdd( IMTUser* user // An object of the account )  
---  
.NET (Gateway/Manager API)
virtual MTRetCode CIMTUserSink.HookUserAdd( CIMTUser user // Account object )  
---  
Parameters
user
[in] A pointer to the object of a [IMTUser](imtuser.md "IMTUser") record to add.
Return Value
In case there are no handlers if this event, [MT_RET_OK](retcodes_successful.md "Successful completion") is returned.
If the event handler returns a code different from [MT_RET_OK](retcodes_successful.md "Successful completion"), then the account record will not be created and the hook will not be passed to other handlers (including other plugins).
Note
The hook is called right before adding an account record to the data base. The main purpose of this hook is to modify an entry that is added, and, if necessary, to prevent the addition of unwanted records.
This method is used only in the MetaTrader 5 Server API.