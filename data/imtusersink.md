# IMTUserSink (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users")/ IMTUserSink | [](imtuserarray_searchright.md "SearchRight") [](imtusersink_onuseradd.md "OnUserAdd") |
| --- | --- | --- |
| --- | --- |

IMTUserSink
The IMTUserSink contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [OnUserAdd](imtusersink_onuseradd.md "OnUserAdd") | A handler of the event of adding a new account. |
| [OnUserAddExt](imtusersink_onuseraddext.md "OnUserAddExt") | An extended handler of a new account addition event. It additionally passes the passwords of the created account. This method can only be used in the MetaTrader 5 Server API. |
| [OnUserUpdate](imtusersink_onuserupdate.md "OnUserUpdate") | A handler of an event of account update. |
| [OnUserDelete](imtusersink_onuserdelete.md "OnUserDelete") | A handler of an event of account deletion. |
| [OnUserClean](imtusersink_onuserclean.md "OnUserClean") | A handler of the event of deletion of obsolete demo account on a trade server. |
| [OnUserLogin](imtusersink_onuserlogin.md "OnUserLogin") | A handler of the event of an account's connection to the server. |
| [OnUserLoginExt](imtusersink_onuserloginext.md "OnUserLoginExt") | A handle of the event of client connection to the server. Passes an extended description of the connection. |
| [OnUserLogout](imtusersink_onuserlogout.md "OnUserLogout") | A handler of the event of a client's disconnection from the server. |
| [OnUserLogoutExt](imtusersink_onuserlogoutext.md "OnUserLogoutExt") | An extended handler of the event of an account's connection to the server. Passes an extended description of the connection. |
| [OnUserChangePassword](imtusersink_onuserchangepassword.md "OnUserChangePassword") | Account password change event handler. This method can only be used in the MetaTrader 5 Server API. |
| [OnUserSync](imtusersink_onusersync.md "OnUserSync") | A handler of the event of the account base synchronization. |
| [OnUserArchive](imtusersink_onuserarchive.md "OnUserArchive") | A handler of the event of moving an account to the archive database. This method is used only in the MetaTrader 5 Server API. |
| [OnUserRestore](imtusersink_onuserrestore.md "OnUserRestore") | A handler of the event of account restoring from an archive or backup database. This method is used only in the MetaTrader 5 Server API. |
| [HookUserAdd](imtusersink_hookuseradd.md "HookUserAdd") | A hook of an event of adding a new account. This method is used only in the MetaTrader 5 Server API. |
| [HookUserAddExt](imtusersink_hookuseraddext.md "HookUserAddExt") | An extended hook for the new account addition event. It additionally passes the passwords of the created account. This method can only be used in the MetaTrader 5 Server API. |
| [HookUserUpdate](imtusersink_hookuserupdate.md "HookUserUpdate") | A hook of an event of account record update. This method is used only in the MetaTrader 5 Server API. |
| [HookUserDelete](imtusersink_hookuserdelete.md "HookUserDelete") | A hook of an event of account record deletion. This method is used only in the MetaTrader 5 Server API. |
| [HookUserLogin](imtusersink_hookuserlogin.md "HookUserLogin") | A hook of an account's connection to the server. This method is used only in the MetaTrader 5 Server API. |
| [HookUserLoginExt](imtusersink_hookuserloginext.md "HookUserLoginExt") | A hook of a account's connection to the server. Passes an extended description of the connection. This method can only be used in the MetaTrader 5 Server API. |
| [HookUserChangePassword](imtusersink_hookuserchangepassword.md "HookUserChangePassword") | Account password change event hook. This method can only be used in the MetaTrader 5 Server API. |
| [HookUserArchive](imtusersink_hookuserarchive.md "HookUserArchive") | A hook of the event of moving an account to the archive database. The method is only used in MetaTrader 5 Server API. |