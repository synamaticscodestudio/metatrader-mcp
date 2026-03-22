# HookUserDelete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserSink ](imtusersink.md "IMTUserSink")/ HookUserDelete | [](imtusersink_hookuserupdate.md "HookUserUpdate") [](imtusersink_hookuserlogin.md "HookUserLogin") |
| --- | --- | --- |
| --- | --- |

IMTUserSink::HookUserDelete
A hook of an event of account record deletion.
virtual MTAPIRES IMTUserSink::HookUserDelete( const IMTUser* user // An object of a deleted account record )  
---  
.NET (Gateway/Manager API)
virtual MTRetCode CIMTUserSink.HookUserDelete( CIMTUser  user // Deleted account record )  
---  
Parameters
user
[in] A pointer to the object of an [IMTUser](imtuser.md "IMTUser") account record to delete.
Return Value
In case there are no handlers if this event, [MT_RET_OK](retcodes_successful.md "Successful completion") is returned.
If the event handler returns a code different from [MT_RET_OK](retcodes_successful.md "Successful completion"), then the account record will not be deleted and the hook will not be passed to other handlers (including other plugins).
Note
The hook is called right before deleting an account record from the client base. The main purpose of this hook is prevent the unwanted deletion of records.
This method is used only in the MetaTrader 5 Server API.