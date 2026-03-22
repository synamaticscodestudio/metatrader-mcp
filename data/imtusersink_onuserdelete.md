# OnUserDelete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserSink ](imtusersink.md "IMTUserSink")/ OnUserDelete | [](imtusersink_onuserupdate.md "OnUserUpdate") [](imtusersink_onuserclean.md "OnUserClean") |
| --- | --- | --- |
| --- | --- |

IMTUserSink::OnUserDelete
A handler of an event of account deletion.
C++
virtual void IMTUserSink::OnUserDelete( const IMTUser* user // A pointer to the deleted record )  
---  
.NET (Gateway/Manager API)
virtual void CIMTUserSink.OnUserDelete( CIMTUser user // The deleted record )  
---  
Parameters
user
[in] A pointer to the object of the deleted record [IMTUser](imtuser.md "IMTUser").
Note
This handler is called by the API to notify of deletion of a trading account.
The handler is not called when [deleting obsolete demo accounts](imtusersink_onuserclean.md "OnUserClean").