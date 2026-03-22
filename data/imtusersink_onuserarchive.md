# OnUserArchive (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserSink ](imtusersink.md "IMTUserSink")/ OnUserArchive | [](imtusersink_onusersync.md "OnUserSync") [](imtusersink_onuserrestore.md "OnUserRestore") |
| --- | --- | --- |
| --- | --- |

IMTUserSink::OnUserArchive
A handler of the event of [moving an account to an archive database](https://support.metaquotes.net/zh/docs/mt5/platform/administration/admin_accounts/accounts_archive).
virtual void IMTUserSink::OnUserArchive( const IMTUser* user // A pointer to an account object )  
---  
.NET(Gateway/Manager API)
virtual void CIMTUserSink.OnUserArchive( CIMTUser user // Account object )  
---  
Parameters
user
[in] A pointer to the object of the added account [IMTUser](imtuser.md "IMTUser").
Note
An account can be moved to archive using the [Administrator terminal](https://support.metaquotes.net/zh/docs/mt5/platform/administration/admin_accounts/accounts_archive) or using API methods [IMTServerAPI::UserArchive](imtserverapi_userarchive.md "UserArchive") and [IMTAdminAPI::UserArchive](imtadminapi_userarchive.md "UserArchive").
This method is used only in the MetaTrader 5 Server API.
When archiving an account, the server calls the following hooks and events (strictly in the specified sequence):
  1. [IMTUserSink::HookUserArchive](imtusersink_hookuserarchive.md "HookUserArchive")
  2. [IMTUserSink::HookUserDelete](imtusersink_hookuserdelete.md "HookUserDelete")
  3. [IMTUserSink::OnUsersDelete](imtusersink_onuserdelete.md "OnUserDelete")
  4. IMTUserSink::OnUsersArchive
