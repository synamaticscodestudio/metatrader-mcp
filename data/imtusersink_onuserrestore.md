# OnUserRestore (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserSink ](imtusersink.md "IMTUserSink")/ OnUserRestore | [](imtusersink_onuserarchive.md "OnUserArchive") [](imtusersink_hookuseradd.md "HookUserAdd") |
| --- | --- | --- |
| --- | --- |

IMTUserSink::OnUserRestore
A handler of the event of restoration of an account [from an archive or backup database](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_accounts/accounts_archive).
virtual void IMTUserSink::OnUserRestore( const IMTUser* user // A pointer to an account object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTUserSink.OnUserRestore( CIMTUser user // Account object )  
---  
Parameters
user
[in] A pointer to the object of the added account record.
Note
An account can be restored using the [Administrator terminal](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_accounts/accounts_archive) or using API methods [IMTServerAPI::UserRestore](imtserverapi_userrestore.md "UserRestore") and [IMTAdminAPI::UserRestore](imtadminapi_userrestore.md "UserRestore").
This method is used only in the MetaTrader 5 Server API.