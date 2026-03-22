# HookUserArchive (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserSink ](imtusersink.md "IMTUserSink")/ HookUserArchive | [](imtusersink_hookuserchangepassword.md "HookUserChangePassword") [](reference_online.md "Online Connections") |
| --- | --- | --- |
| --- | --- |

IMTUserSink::HookUserArchive
A hook of the event of [moving an account to an archive database](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_accounts/accounts_archive).
virtual void IMTUserSink::HookUserArchive( const IMTUser* user // A pointer to an account record )  
---  
.NET(Gateway/Manager API)
virtual void CIMTUserSink.HookUserArchive( CIMTUser user // Account object )  
---  
Parameters
user
[in] A pointer to the [IMTUser](imtuser.md "IMTUser") object of the added account record.
Return value
To confirm the transfer to the archive, [MT_RET_OK](retcodes_successful.md "Successful completion") should be returned. If the hook returns a code different from [MT_RET_OK](retcodes_successful.md "Successful completion"), the account record will not be moved to archive and the hook will not be passed to other handlers (including other plugins).
Note
An account can be moved to archive using the [Administrator terminal](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_accounts/accounts_archive) or using API methods [IMTServerAPI::UserArchive](imtserverapi_userarchive.md "UserArchive") and [IMTAdminAPI::UserArchive](imtadminapi_userarchive.md "UserArchive").
This method is used only in the MetaTrader 5 Server API.
When archiving an account, the server calls the following hooks and events (strictly in the specified sequence):
  1. IMTUserSink::HookUserArchive
  2. [IMTUserSink::HookUserDelete](imtusersink_hookuserdelete.md "HookUserDelete")
  3. [IMTUserSink::OnUsersDelete](imtusersink_onuserdelete.md "OnUserDelete")
  4. [IMTUserSink::OnUsersArchive](imtusersink_onuserarchive.md "OnUserArchive")
