# OnUserUpdate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserSink ](imtusersink.md "IMTUserSink")/ OnUserUpdate | [](imtusersink_onuseraddext.md "OnUserAddExt") [](imtusersink_onuserdelete.md "OnUserDelete") |
| --- | --- | --- |
| --- | --- |

IMTUserSink::OnUserUpdate
A handler of an event of account update.
C++
virtual void IMTUserSink::OnUserUpdate( const IMTUser* user // A pointer to the updated record )  
---  
.NET (Gateway/Manager API)
virtual void CIMTUserSink.OnUserUpdate( CIMTUser user // The updated record )  
---  
Parameters
user
[in] A pointer to the object of the updated record [IMTUser](imtuser.md "IMTUser").
Note
The API calls the method to notify about an update of a trading account. The update event occurs not only when the account parameters are changed, but also when any trading operation is performed on it, as each operation changes the account state.
When the account group is changed, the event is called twice. This is related to the platform architecture specifics.