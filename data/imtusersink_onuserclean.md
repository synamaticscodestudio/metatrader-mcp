# OnUserClean (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserSink ](imtusersink.md "IMTUserSink")/ OnUserClean | [](imtusersink_onuserdelete.md "OnUserDelete") [](imtusersink_onuserlogin.md "OnUserLogin") |
| --- | --- | --- |
| --- | --- |

IMTUserSink::OnUserClean
A handler of the event of deletion of obsolete demo account on a trade server.
C++
virtual void IMTUserSink::OnUserClean( const UINT64 login // Account login )  
---  
.NET (Gateway/Manager API)
virtual void CIMTUserSink.OnUserClean( ulong login // Account login )  
---  
Parameters
login
[in] The login of an account.
Note
Every day, at server time, expired demo accounts are automatically deleted on trade servers. The handler notifies of such an operation and transmits the logins of deleted accounts.
This handler can be used, for example, during the synchronization of an external database of accounts with a database of accounts on a trade server.
[IMTUserSink::OnUserDelete](imtusersink_onuserdelete.md "OnUserDelete") is not called when deleting obsolete demo accounts.
The method is not used in Gateway API.