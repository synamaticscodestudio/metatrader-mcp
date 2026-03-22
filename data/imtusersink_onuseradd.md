# OnUserAdd (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserSink ](imtusersink.md "IMTUserSink")/ OnUserAdd | [](imtusersink.md "IMTUserSink") [](imtusersink_onuseraddext.md "OnUserAddExt") |
| --- | --- | --- |
| --- | --- |

IMTUserSink::OnUserAdd
A handler of the event of adding a new account.
C++
virtual void IMTUserSink::OnUserAdd( const IMTUser* user // A pointer to the added record )  
---  
.NET (Gateway/Manager API)
virtual void CIMTUserSink.OnUserAdd( CIMTUser user // The added record )  
---  
Parameters
user
[in] A pointer to the object of the added record IMTUser.
Note
This method is called by the API to notify that a new trading account has been added.